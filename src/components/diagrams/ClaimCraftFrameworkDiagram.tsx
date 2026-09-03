const stations = [
  { label: "Pre-Claim", note: "Baseline context before an incident occurs" },
  { label: "Accident Scene", note: "Highest chaos, highest time pressure" },
  { label: "Loss Report", note: "Formal capture of what happened" },
  { label: "Initial Contact", note: "First live handoff to a claims rep" },
];

const roundPhases = [
  { label: "Context Review", time: "~3 min" },
  { label: "Draw Cards", time: "~1 min" },
  { label: "Team Strategy", time: "~12 min" },
  { label: "Scoring", time: "~4 min" },
];

const cardTypes = [
  {
    label: "Claim Type",
    color: "bg-slate-ocean",
    frequency: "Drawn once, held all game",
    description: "Sets the claim's severity and complexity for the whole round.",
  },
  {
    label: "Person",
    color: "bg-gold-wildflower",
    frequency: "Drawn fresh each station",
    description: "Who the customer is and their known channel preferences.",
  },
  {
    label: "Environmental Context",
    color: "bg-sage",
    frequency: "Drawn fresh each station",
    description: "Physical or situational constraints acting on the scene.",
  },
  {
    label: "Wild Card",
    color: "bg-rust",
    frequency: "Played by facilitators, spontaneously",
    description: "An unexpected complication the team must adapt to live.",
  },
];

const scoringCriteria = [
  { label: "Customer-Centered", max: 3 },
  { label: "Data Intelligence", max: 3 },
  { label: "Business Viability", max: 2 },
  { label: "Tech Integration", max: 2 },
];

export function ClaimCraftFrameworkDiagram() {
  return (
    <div className="space-y-8">
      {/* Game flow: 4 stations */}
      <div>
        <p className="text-sm font-semibold text-stone-600 mb-3">
          Teams move through four claim-phase stations
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stations.map((station, i) => (
            <div key={station.label} className="relative">
              <div className="bg-stone-sand border border-stone-200 rounded-lg p-4 h-full">
                <p className="text-xs text-stone-500 mb-1">Station {i + 1}</p>
                <p className="font-semibold text-stone-900 mb-1">{station.label}</p>
                <p className="text-sm text-stone-600">{station.note}</p>
              </div>
              {i < stations.length - 1 && (
                <div
                  className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 items-center justify-center text-canopy"
                  aria-hidden="true"
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Round structure */}
      <div>
        <p className="text-sm font-semibold text-stone-600 mb-3">
          Each station runs the same 4-phase round (~20 minutes)
        </p>
        <div className="flex flex-wrap items-stretch gap-2">
          {roundPhases.map((phase, i) => (
            <div key={phase.label} className="flex items-center gap-2">
              <div className="bg-white/75 border border-stone-200 rounded-lg px-4 py-3 text-center">
                <p className="font-medium text-stone-900 text-sm">{phase.label}</p>
                <p className="text-xs text-stone-500">{phase.time}</p>
              </div>
              {i < roundPhases.length - 1 && (
                <span className="text-canopy" aria-hidden="true">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Card taxonomy */}
      <div>
        <p className="text-sm font-semibold text-stone-600 mb-3">
          Four card types drive each team's strategic decisions
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {cardTypes.map((card) => (
            <div key={card.label} className="flex gap-3 bg-white/75 border border-stone-200 rounded-lg p-4">
              <div className={`w-2 rounded-full flex-shrink-0 ${card.color}`} aria-hidden="true"></div>
              <div>
                <p className="font-semibold text-stone-900 text-sm">{card.label}</p>
                <p className="text-xs text-stone-500 mb-1">{card.frequency}</p>
                <p className="text-sm text-stone-700">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scoring rubric */}
      <div>
        <p className="text-sm font-semibold text-stone-600 mb-3">
          Teams are scored across four criteria, plus bonuses for competitive
          differentiation, measurability, data proportionality, and efficiency
          (and a penalty for solutions that ignore research reality)
        </p>
        <div className="space-y-2">
          {scoringCriteria.map((criterion) => (
            <div key={criterion.label} className="flex items-center gap-3">
              <span className="text-sm text-stone-700 w-40 flex-shrink-0">{criterion.label}</span>
              <div className="flex gap-1">
                {Array.from({ length: criterion.max }).map((_, i) => (
                  <div key={i} className="w-6 h-3 rounded-sm bg-canopy" aria-hidden="true"></div>
                ))}
              </div>
              <span className="text-xs text-stone-500">0–{criterion.max} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
