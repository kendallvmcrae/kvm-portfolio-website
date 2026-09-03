import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";

// Palette pulled from tailwind.config.js so this stays in sync with the site's colors without
// depending on Tailwind's JIT for dynamically-computed SVG fills.
const REVIVED_GREENS = ["#2A3D2E", "#4A6741", "#6B8C5A", "#96A882"]; // forest → meadow
const DORMANT_BROWNS = ["#4D3322", "#6B4A34", "#7D6E63", "#8C6652"]; // bark.fence → driftwood
const BARK_DRY = "#4D3322";
const BARK_DAMP = "#6B4A34";

const NS = "http://www.w3.org/2000/svg";

/** Deterministic pseudo-random in [0,1) so the colony looks organic but renders identically. */
function rand(seed: number): number {
  return (Math.sin(seed * 127.1 + 311.7) * 43758.5453) % 1 + 0.5;
}

/** Quadratic bezier point along the rachis. t=0 at the base, t=1 at the tip. */
function rachisPoint(t: number, height: number, bow: number) {
  const p0x = 0;
  const p0y = height * 0.5;
  const p1x = bow * 0.55;
  const p1y = 0;
  const p2x = bow;
  const p2y = -height * 0.5;
  const mt = 1 - t;
  return {
    x: mt * mt * p0x + 2 * mt * t * p1x + t * t * p2x,
    y: mt * mt * p0y + 2 * mt * t * p1y + t * t * p2y,
  };
}

/** Tangent angle (degrees) of the rachis at t — leaflets attach relative to this. */
function rachisAngle(t: number, height: number, bow: number): number {
  const mt = 1 - t;
  const dx = 2 * mt * (bow * 0.55 - 0) + 2 * t * (bow - bow * 0.55);
  const dy = 2 * mt * (0 - height * 0.5) + 2 * t * (-height * 0.5 - 0);
  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

/**
 * A single pinna. Asymmetric on purpose — one edge bows harder than the other and the tip
 * sweeps toward the frond apex, which is what stops it reading as a symmetrical cartoon leaf.
 */
function leafPath(len: number, width: number, sweep: number): string {
  const tipX = len * sweep;
  return (
    `M0,0 ` +
    `C${width * 1.05},${len * 0.16} ${width * 0.95},${len * 0.58} ${tipX},${len} ` +
    `C${-width * 0.72},${len * 0.6} ${-width * 0.86},${len * 0.2} 0,0 Z`
  );
}

type FrondState = "dormant" | "revived";

interface Frond {
  setState: (state: FrondState, animate: boolean) => void;
}

function buildFern(
  container: SVGGElement,
  opts: { pairs: number; height: number; bow: number; seed: number; revivedColor: string; dormantColor: string }
): Frond {
  const { pairs, height, bow, seed, revivedColor, dormantColor } = opts;

  // Rachis, sampled from the same curve the leaflets sit on.
  function rachisD(curl: number) {
    const pts: string[] = [];
    for (let i = 0; i <= 16; i++) {
      const t = i / 16;
      const p = rachisPoint(t, height, bow);
      // `curl` bends the upper half of the frond inward, the way a drying frond hooks over.
      const c = curl * Math.pow(t, 2.2);
      const cx = p.x - c * height * 0.42;
      const cy = p.y + c * height * 0.3;
      pts.push(`${cx.toFixed(1)},${cy.toFixed(1)}`);
    }
    return "M" + pts.join(" L");
  }

  const rachisRevived = document.createElementNS(NS, "path");
  rachisRevived.setAttribute("class", "fern-rachis");
  rachisRevived.setAttribute("d", rachisD(0));
  rachisRevived.setAttribute("stroke", revivedColor);
  rachisRevived.setAttribute("stroke-width", "1.1");
  rachisRevived.setAttribute("fill", "none");
  rachisRevived.setAttribute("stroke-linecap", "round");
  container.appendChild(rachisRevived);

  const rachisDormant = document.createElementNS(NS, "path");
  rachisDormant.setAttribute("class", "fern-rachis");
  rachisDormant.setAttribute("d", rachisD(1));
  rachisDormant.setAttribute("stroke", dormantColor);
  rachisDormant.setAttribute("stroke-width", "1");
  rachisDormant.setAttribute("fill", "none");
  rachisDormant.setAttribute("stroke-linecap", "round");
  rachisDormant.style.opacity = "0";
  container.appendChild(rachisDormant);

  const leaflets: {
    el: SVGGElement;
    path: SVGPathElement;
    revived: { transform: string; fill: string };
    dormant: { transform: string; fill: string };
  }[] = [];

  for (let i = 0; i < pairs; i++) {
    // Skip the very base and very tip so the rachis reads as a stem at both ends.
    const t = 0.08 + (i / (pairs - 1)) * 0.88;
    const p = rachisPoint(t, height, bow);
    const tangent = rachisAngle(t, height, bow);

    // Lanceolate frond: pinnae widest around mid-length, tapering at base and apex.
    const taper = 0.34 + 0.66 * Math.sin(t * Math.PI);
    const jitter = 0.86 + 0.28 * rand(seed + i);
    const lLen = height * 0.17 * taper * jitter;
    const lWidth = lLen * 0.22;
    const sweep = 0.12 + 0.1 * rand(seed + i * 3);

    for (const side of [-1, 1]) {
      const g = document.createElementNS(NS, "g");
      g.setAttribute("class", "fern-leaflet");
      const path = document.createElementNS(NS, "path");
      path.setAttribute("d", leafPath(lLen, lWidth, side < 0 ? -sweep : sweep));
      g.appendChild(path);
      container.appendChild(g);

      // Pinnae sit near-perpendicular to the rachis, angled slightly toward the tip.
      const spread = 62 + 14 * (1 - t) + 8 * rand(seed + i * 7 + side);
      const revivedRotation = tangent + 90 - side * spread;
      const revivedTransform = `translate(${p.x.toFixed(1)}px,${p.y.toFixed(
        1
      )}px) rotate(${revivedRotation.toFixed(1)}deg) scale(1)`;

      // Dormant: pinnae curl up tight against the rachis and shrink inward.
      const dormantRotation = tangent + 90 - side * (spread + 26);
      const curlX = p.x - Math.pow(t, 2.2) * height * 0.42;
      const curlY = p.y + Math.pow(t, 2.2) * height * 0.3;
      const dormantTransform = `translate(${curlX.toFixed(1)}px,${curlY.toFixed(
        1
      )}px) rotate(${dormantRotation.toFixed(1)}deg) scale(0.34)`;

      leaflets.push({
        el: g,
        path,
        revived: { transform: revivedTransform, fill: revivedColor },
        dormant: { transform: dormantTransform, fill: dormantColor },
      });
    }
  }

  function setState(state: FrondState, animate: boolean) {
    leaflets.forEach((lf, idx) => {
      const order = state === "dormant" ? leaflets.length - 1 - idx : idx;
      lf.el.style.transitionDelay = animate ? `${order * 14}ms` : "0ms";
      const s = lf[state];
      lf.el.style.transform = s.transform;
      lf.path.setAttribute("fill", s.fill);
    });
    rachisRevived.style.opacity = state === "revived" ? "1" : "0";
    rachisDormant.style.opacity = state === "dormant" ? "1" : "0";
    const railDelay = animate ? "60ms" : "0ms";
    rachisRevived.style.transitionDelay = railDelay;
    rachisDormant.style.transitionDelay = railDelay;
  }

  return { setState };
}

interface Colony {
  setAll: (state: FrondState, animate: boolean) => void;
  count: number;
}

function buildFrondCluster(
  svg: SVGSVGElement,
  opts: { count: number; ringRadius: number; baseHeight: number; pairs: number }
): Colony {
  const { count, ringRadius, baseHeight, pairs } = opts;

  // Central bark node the colony grows out of.
  const bark = document.createElementNS(NS, "ellipse");
  bark.setAttribute("class", "fern-bark");
  bark.setAttribute("cx", "0");
  bark.setAttribute("cy", "0");
  bark.setAttribute("rx", String(ringRadius * 0.72));
  bark.setAttribute("ry", String(ringRadius * 0.58));
  bark.setAttribute("opacity", "0.55");
  bark.style.fill = BARK_DRY;
  svg.appendChild(bark);

  for (let g = 0; g < 6; g++) {
    const grain = document.createElementNS(NS, "path");
    const ga = (g / 6) * Math.PI * 2 + 0.4;
    const gr = ringRadius * (0.4 + 0.18 * rand(g * 5));
    grain.setAttribute(
      "d",
      `M${(Math.cos(ga) * gr).toFixed(1)},${(Math.sin(ga) * gr * 0.8).toFixed(1)} A${gr},${gr} 0 0 1 ${(
        Math.cos(ga + 1.1) * gr
      ).toFixed(1)},${(Math.sin(ga + 1.1) * gr * 0.8).toFixed(1)}`
    );
    grain.setAttribute("stroke", "rgba(0,0,0,0.10)");
    grain.setAttribute("stroke-width", "0.6");
    grain.setAttribute("fill", "none");
    svg.appendChild(grain);
  }

  const fronds: Frond[] = [];
  for (let i = 0; i < count; i++) {
    const r = rand(i * 13);
    const angle = (360 / count) * i + (r - 0.5) * 16;
    const height = baseHeight * (0.74 + 0.42 * rand(i * 29));
    const bow = (rand(i * 17) - 0.5) * height * 0.34;
    const green = REVIVED_GREENS[i % REVIVED_GREENS.length];
    const brown = DORMANT_BROWNS[i % DORMANT_BROWNS.length];

    const spoke = document.createElementNS(NS, "g");
    spoke.setAttribute("transform", `rotate(${angle.toFixed(1)})`);
    // Depth: fronds sit at slightly different opacities so the colony has layers.
    spoke.setAttribute("opacity", (0.72 + 0.28 * rand(i * 37)).toFixed(2));

    const inner = document.createElementNS(NS, "g");
    inner.setAttribute("transform", `translate(0,${(-(ringRadius + height * 0.5)).toFixed(1)})`);
    spoke.appendChild(inner);
    svg.appendChild(spoke);

    fronds.push(
      buildFern(inner, {
        pairs,
        height,
        bow,
        seed: i * 11 + 3,
        revivedColor: green,
        dormantColor: brown,
      })
    );
  }

  function setAll(state: FrondState, animate: boolean) {
    const order = state === "dormant" ? [...fronds].reverse() : fronds;
    order.forEach((frond, idx) => {
      setTimeout(() => frond.setState(state, animate), animate ? idx * 80 : 0);
    });
    bark.style.fill = state === "revived" ? BARK_DAMP : BARK_DRY;
  }

  return { setAll, count };
}

interface FernColonyProps {
  className?: string;
  size?: number;
  /** Number of fronds in the ring. */
  count?: number;
  /** Pinnae pairs per frond — higher reads finer and more botanical at large sizes. */
  pairs?: number;
  /** If true the SVG ignores pointer events; a wrapping element drives `play()` via the ref. */
  decorative?: boolean;
}

export interface FernColonyHandle {
  play: () => void;
}

/**
 * A radial colony of resurrection fern fronds growing from a central bark node. Cycles from
 * revived (open, green) to dormant (curled, brown) and back, the way the real plant does when
 * it dries out and rehydrates.
 */
export const FernColony = forwardRef<FernColonyHandle, FernColonyProps>(function FernColony(
  { className, size = 260, count = 9, pairs = 11, decorative = false },
  ref
) {
  const svgRef = useRef<SVGSVGElement>(null);
  const colonyRef = useRef<Colony | null>(null);
  const playingRef = useRef(false);
  const [status, setStatus] = useState("resting");

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    const colony = buildFrondCluster(svg, { count, ringRadius: 13, baseHeight: 52, pairs });
    colonyRef.current = colony;
    colony.setAll("revived", false);
  }, [count, pairs]);

  const play = () => {
    const colony = colonyRef.current;
    if (!colony || playingRef.current) return;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    playingRef.current = true;
    const settleDelay = colony.count * 80 + 1600;
    setStatus("going dormant");
    colony.setAll("dormant", !reduceMotion);
    setTimeout(
      () => {
        setStatus("reviving");
        colony.setAll("revived", !reduceMotion);
        setTimeout(
          () => {
            setStatus("resting");
            playingRef.current = false;
          },
          reduceMotion ? 50 : settleDelay
        );
      },
      reduceMotion ? 50 : settleDelay
    );
  };

  useImperativeHandle(ref, () => ({ play }));

  return (
    <div className={className}>
      <svg
        ref={svgRef}
        viewBox="-110 -110 220 220"
        width={size}
        height={size}
        role="img"
        aria-label={`Resurrection fern colony, currently ${status}. Move your cursor across it to watch it cycle from dormant to revived.`}
        tabIndex={decorative ? -1 : 0}
        className={
          decorative
            ? "pointer-events-none select-none"
            : "cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-canopy rounded-full"
        }
        onPointerEnter={decorative ? undefined : play}
        onFocus={decorative ? undefined : play}
        onClick={decorative ? undefined : play}
      />
    </div>
  );
});
