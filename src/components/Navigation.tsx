interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => onNavigate("home")}
            className="text-xl font-bold text-terracotta-600 hover:text-terracotta-700 transition-colors"
          >
            Kendall McRae
          </button>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? "text-terracotta-600 border-b-2 border-terracotta-600"
                    : "text-stone-600 hover:text-terracotta-600"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <div className="flex flex-row space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-2 py-1 text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? "text-terracotta-600"
                      : "text-stone-600 hover:text-terracotta-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
