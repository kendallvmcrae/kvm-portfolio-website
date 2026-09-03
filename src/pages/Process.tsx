interface ProcessProps {
  onNavigate: (page: string) => void;
}

export function Process({ onNavigate }: ProcessProps) {
  return (
    <div className="py-24 lg:py-40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.14em] text-terracotta-bluff mb-4">Coming soon</p>
        <h1 className="text-4xl lg:text-5xl font-semibold text-stone-900 mb-6">
          My Process
        </h1>
        <p className="text-lg text-stone-800 mb-10 max-w-xl mx-auto">
          A closer look at how I actually run a research program — from framing a question through
          to the decisions it changes. Still being written.
        </p>
        <button
          onClick={() => onNavigate("work")}
          className="px-8 py-3 border-2 border-basalt text-basalt font-semibold rounded-lg hover:bg-basalt hover:text-white transition-colors"
        >
          See the work instead
        </button>
      </div>
    </div>
  );
}
