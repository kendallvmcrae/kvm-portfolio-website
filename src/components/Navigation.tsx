import { FernMark } from "./FernMark";

const navItems = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "process", label: "Process" },
  { id: "fun", label: "Fun" },
];

const contactDetails = [
  { label: "Atlanta, GA", value: "United States" },
  { label: "Redding, CA", value: "United States" },
  { label: "United Kingdom", value: "Dual citizen" },
];

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  open: boolean;
  onToggle: () => void;
}

export function Navigation({ currentPage, onNavigate, open, onToggle }: NavigationProps) {
  const handleNavigate = (page: string) => {
    onNavigate(page);
    if (open) onToggle();
  };

  return (
    <header className="relative z-50">
      {/* Top bar */}
      <div className="px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={() => handleNavigate("home")}
            aria-label="Home"
            className="flex items-center gap-2.5 text-lg font-semibold tracking-tight text-basalt hover:text-canopy transition-colors"
          >
            <FernMark className="w-7 h-7" />
            Kendall McRae
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavigate("contact")}
              className="hidden sm:inline-flex px-5 py-2 rounded-full bg-basalt text-white text-sm font-semibold hover:bg-dark-earth transition-colors"
            >
              Contact me
            </button>
            <button
              onClick={onToggle}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="w-10 h-10 rounded-full border border-stone-300 bg-white/60 flex items-center justify-center text-basalt hover:bg-white transition-colors"
            >
              {open ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Expanding dark panel */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[640px]" : "max-h-0"
        }`}
      >
        <div className="bg-basalt text-white rounded-b-3xl">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`group text-left py-5 border-b border-white/10 text-3xl sm:text-4xl font-semibold tracking-tight transition-colors ${
                      currentPage === item.id ? "text-lichen" : "text-white hover:text-lichen"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {item.label}
                      <span className="text-lichen opacity-0 group-hover:opacity-100 transition-opacity text-xl">
                        &rarr;
                      </span>
                    </span>
                  </button>
                ))}
              </nav>

              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-cliff mb-4">
                    Where I can work
                  </p>
                  <ul className="space-y-3">
                    {contactDetails.map((detail) => (
                      <li key={detail.label} className="text-sm">
                        <span className="text-white font-medium">{detail.label}</span>
                        <span className="text-stone-cliff"> &middot; {detail.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-stone-cliff mb-4">
                    Get in touch
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="mailto:kendallvmcrae@gmail.com" className="hover:text-lichen transition-colors">
                        kendallvmcrae@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+16785387431" className="hover:text-lichen transition-colors">
                        +1 (678) 538-7431
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/kendallvictoriam/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-lichen transition-colors"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
