interface FunProps {
  onNavigate: (page: string) => void;
}

export function Fun({ onNavigate }: FunProps) {
  return (
    <div className="py-24 lg:py-40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.14em] text-terracotta-bluff mb-4">Coming soon</p>
        <h1 className="text-4xl lg:text-5xl font-semibold text-stone-900 mb-6">
          Fun
        </h1>
        <p className="text-lg text-stone-800 mb-10 max-w-xl mx-auto">
          A side of me that doesn't show up in a case study — art and other things I make when
          I'm not doing research. Coming soon.
        </p>
        <button
          onClick={() => onNavigate("home")}
          className="px-8 py-3 border-2 border-basalt text-basalt font-semibold rounded-lg hover:bg-basalt hover:text-white transition-colors"
        >
          Back home
        </button>
      </div>
    </div>
  );
}
