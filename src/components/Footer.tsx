import { FernMark } from "./FernMark";

interface FooterProps {
  onNavigate: (page: string) => void;
  onViewProject: (projectId: string) => void;
}

export function Footer({ onNavigate, onViewProject }: FooterProps) {
  return (
    <footer className="bg-basalt text-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* CTA */}
        <div className="mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-5xl font-semibold text-white mb-6 max-w-2xl">
            Looking forward to connecting with you.
          </h2>
          <button
            onClick={() => onNavigate("contact")}
            className="inline-block px-8 py-3 bg-white text-basalt font-semibold rounded-lg hover:bg-stone-200 transition-colors"
          >
            Contact
          </button>
        </div>

        {/* Contact + nav columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-stone-400 mb-3">Contact</p>
            <ul className="space-y-1.5 text-sm text-stone-300">
              <li>Atlanta, GA</li>
              <li>Redding, CA</li>
              <li>United Kingdom</li>
              <li className="pt-2">
                <a href="mailto:kendallvmcrae@gmail.com" className="hover:text-white transition-colors">
                  kendallvmcrae@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+16785387431" className="hover:text-white transition-colors">
                  +1 (678) 538-7431
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-stone-400 mb-3">Work</p>
            <ul className="space-y-1.5 text-sm text-stone-300">
              <li>
                <button onClick={() => onViewProject("auto-claims-digital-modernization")} className="hover:text-white transition-colors text-left">
                  State Farm
                </button>
              </li>
              <li>
                <button onClick={() => onViewProject("vibra-research-strategy")} className="hover:text-white transition-colors text-left">
                  Vibra
                </button>
              </li>
              <li>
                <button onClick={() => onViewProject("vails-virtual-nails")} className="hover:text-white transition-colors text-left">
                  Vails
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("work")} className="hover:text-white transition-colors text-left">
                  See more
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-stone-400 mb-3">Brand</p>
            <ul className="space-y-1.5 text-sm text-stone-300">
              <li>
                <button onClick={() => onNavigate("about")} className="hover:text-white transition-colors text-left">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("process")} className="hover:text-white transition-colors text-left">
                  Process
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("fun")} className="hover:text-white transition-colors text-left">
                  Fun
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("contact")} className="hover:text-white transition-colors text-left">
                  Contact Me
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-stone-400 mb-3">Connect</p>
            <ul className="space-y-1.5 text-sm text-stone-300">
              <li>
                <a
                  href="https://www.linkedin.com/in/kendallvictoriam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex items-center gap-2 text-stone-500 text-sm">
          <FernMark className="w-4 h-4" />
          <span>Kendall McRae &middot; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
