import { useState } from "react";

export interface CompanyLogo {
  name: string;
  /** File in /public/logos. Drop a real SVG/PNG there and it replaces the wordmark automatically. */
  file?: string;
  /** Tailwind classes approximating the brand's own wordmark styling, used until a file exists. */
  wordmarkClass?: string;
}

/**
 * Companies Kendall has worked with. `file` entries render the real mark; the rest fall back to a
 * typeset wordmark until logo files are added to /public/logos.
 */
export const companies: CompanyLogo[] = [
  { name: "State Farm", file: "/logos/statefarm.svg", wordmarkClass: "font-bold tracking-tight" },
  { name: "Adobe", file: "/logos/adobe.svg", wordmarkClass: "font-bold tracking-tight" },
  { name: "LastPass", file: "/logos/lastpass.svg", wordmarkClass: "font-semibold tracking-tight" },
  { name: "DeviantArt", file: "/logos/deviantart.svg", wordmarkClass: "font-medium tracking-[0.2em] uppercase" },
  { name: "Vails", file: "/logos/vails.svg", wordmarkClass: "font-semibold tracking-[0.18em] uppercase" },
  { name: "Vibra", file: "/logos/vibra.svg", wordmarkClass: "font-semibold tracking-tight" },
  { name: "Peak AI", file: "/logos/peak-ai.svg", wordmarkClass: "font-semibold tracking-tight" },
];

function Logo({ company }: { company: CompanyLogo }) {
  const [failed, setFailed] = useState(false);

  if (company.file && !failed) {
    return (
      <img
        src={company.file}
        alt={company.name}
        onError={() => setFailed(true)}
        className="h-7 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
      />
    );
  }

  return (
    <span
      className={`text-lg text-stone-600 opacity-70 hover:opacity-100 transition-opacity ${
        company.wordmarkClass ?? ""
      }`}
    >
      {company.name}
    </span>
  );
}

export function LogoStrip() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
      {companies.map((company) => (
        <Logo key={company.name} company={company} />
      ))}
    </div>
  );
}
