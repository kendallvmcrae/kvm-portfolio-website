import { useState } from "react";

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <button
            onClick={() => handleNavigate("home")}
            className="text-xl font-bold text-basalt hover:text-[#A8832A] transition-colors"
          >
            Kendall McRae
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? "text-basalt border-b-2 border-basalt"
                    : "text-stone-600 hover:text-[#A8832A]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden p-2 rounded-lg text-stone-600 hover:text-[#A8832A] hover:bg-stone-100 transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white/95 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  currentPage === item.id
                    ? "text-basalt bg-stone-mist"
                    : "text-stone-600 hover:text-[#A8832A] hover:bg-stone-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
