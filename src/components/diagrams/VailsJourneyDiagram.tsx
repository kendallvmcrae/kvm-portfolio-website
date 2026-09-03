const painPoints = [
  {
    label: "Cost",
    description: "Salon manicures were expensive, and once done, you were committed for weeks.",
    solvedBy: "Join & Measure",
  },
  {
    label: "Health",
    description: "SNS, acrylic, and gel manicures relied on harsh chemicals including known carcinogens to adhere tips to a person's natural nail. These chemicals emit pungent fumes and are harsh on nail beds even with skilled technicians.",
    solvedBy: "Wear",
  },
  {
    label: "Customization",
    description: "You might not get the exact look you wanted, with no easy way to change your mind.",
    solvedBy: "Design",
  },
  {
    label: "Waste",
    description: "Stick-on kits meant buying multiple sizes and hoping one fit, discarding the rest.",
    solvedBy: "Join & Measure",
  },
  {
    label: "Accessibility",
    description: "Every reliable option required either a salon appointment or gambling on off-the-shelf sizing.",
    solvedBy: "Ship",
  },
];

const onboarding = [
  { label: "Discover", note: "You see it worn by trendsetters, celebrities, and local artists sharing their Vails designs." },
  { label: "Join & Measure", note: "You subscribe, then scan your hand once so AR can capture your nail bed's shape and curvature." },
];

const loop = [
  { label: "Design", note: "Browse the library or create your own; save, reuse, or publish designs for others to select." },
  { label: "Ship", note: "Your press-on set ships in 2–5 business days, sized to your measurements." },
  { label: "Wear", note: "A non-eroding adhesive only fully releases after a long soak in warm water, so it stays reliable through daily wear and washing until you're ready to remove it." },
  { label: "Renew", note: "Loved it? Reorder the same design, or pick something new for your next cycle." },
];

function LoopBadge() {
  return (
    <span
      className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-canopy text-white text-xs flex items-center justify-center"
      aria-hidden="true"
      title="Part of the repeating cycle"
    >
      ↻
    </span>
  );
}

export function VailsJourneyDiagram() {
  return (
    <div className="space-y-8">
      {/* Pain points */}
      <div>
        <p className="text-sm font-semibold text-stone-600 mb-3">
          Problem Space
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {painPoints.map((point) => (
            <div key={point.label} className="bg-white/75 border border-stone-200 rounded-lg p-4">
              <p className="font-semibold text-stone-900 text-sm mb-1">{point.label}</p>
              <p className="text-sm text-stone-700 mb-2">{point.description}</p>
              <p className="text-xs text-canopy">Solved in: {point.solvedBy}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Onboarding, one-time (no loop badge, signaling it's outside the cycle) */}
      <div>
        <p className="text-sm font-semibold text-stone-600 mb-3">
          Onboarding
        </p>
        <div className="flex flex-wrap items-stretch gap-2">
          {onboarding.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2">
              <div className="relative bg-stone-sand border border-stone-200 rounded-lg p-4 max-w-[220px]">
                <p className="font-semibold text-stone-900 text-sm mb-1">{step.label}</p>
                <p className="text-sm text-stone-600">{step.note}</p>
              </div>
              <span className="text-canopy flex-shrink-0" aria-hidden="true">→</span>
            </div>
          ))}
        </div>
      </div>

      {/* The repeating loop */}
      <div>
        <p className="text-sm font-semibold text-stone-600 mb-3 flex items-center gap-2">
          The Subscription Cycle
          <span className="w-5 h-5 rounded-full bg-canopy text-white text-xs flex items-center justify-center" aria-hidden="true">↻</span>
        </p>
        <div className="flex flex-wrap items-stretch gap-2">
          {loop.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2">
              <div className="relative bg-white/75 border border-stone-200 rounded-lg p-4 max-w-[220px]">
                <LoopBadge />
                <p className="font-semibold text-stone-900 text-sm mb-1">{step.label}</p>
                <p className="text-sm text-stone-600">{step.note}</p>
              </div>
              {i < loop.length - 1 && (
                <span className="text-canopy flex-shrink-0" aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>
        <p className="text-sm text-canopy mt-2">↻ Renew loops back into Design for the next cycle</p>
      </div>

      {/* Cross-cutting note */}
      <div className="bg-stone-mist rounded-lg p-4">
        <p className="text-sm text-stone-700">
          <span className="font-semibold text-stone-900">Tiered Membership: </span>
          Different membership layers unlock premium designs and materials to "upgrade" a user's manicure per their preferences.
        </p>
      </div>
    </div>
  );
}
