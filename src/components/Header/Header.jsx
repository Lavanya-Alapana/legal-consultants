import React from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 w-full shadow-lg z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/85 backdrop-blur-md' 
        : 'bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900'
    }`}>
      {/* Container */}
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-10 xl:px-10 py-4">
        <div className="flex justify-between items-center">

          {/* Left - Brand */}
          <div className="flex items-center gap-3">
            {/* Logo - Justice Scale */}
            <svg 
              className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0" 
              viewBox="0 0 64 64" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Center pole */}
              <line x1="32" y1="8" x2="32" y2="54" stroke="#FACC15" strokeWidth="2.5" strokeLinecap="round"/>
              {/* Base */}
              <line x1="22" y1="54" x2="42" y2="54" stroke="#FACC15" strokeWidth="3" strokeLinecap="round"/>
              {/* Horizontal beam */}
              <line x1="14" y1="16" x2="50" y2="16" stroke="#FACC15" strokeWidth="2.5" strokeLinecap="round"/>
              {/* Left scale strings */}
              <line x1="18" y1="16" x2="14" y2="28" stroke="#FACC15" strokeWidth="1.8"/>
              <line x1="18" y1="16" x2="22" y2="28" stroke="#FACC15" strokeWidth="1.8"/>
              {/* Right scale strings */}
              <line x1="46" y1="16" x2="42" y2="28" stroke="#FACC15" strokeWidth="1.8"/>
              <line x1="46" y1="16" x2="50" y2="28" stroke="#FACC15" strokeWidth="1.8"/>
              {/* Left pan */}
              <ellipse cx="18" cy="30" rx="6" ry="2" stroke="#FACC15" strokeWidth="2" fill="none"/>
              {/* Right pan */}
              <ellipse cx="46" cy="30" rx="6" ry="2" stroke="#FACC15" strokeWidth="2" fill="none"/>
            </svg>
            
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-wide leading-tight">
                Vivek & Co.
              </h1>
              <div className="border-t-2 border-white mt-0.5 mb-0.5"></div>
              <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-amber-400 font-semibold tracking-wider uppercase">
                Legal Consultants
              </p>
            </div>
          </div>

          {/* Right - Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 xl:gap-10 items-center">
            {["Home", "About", "Services", "Career", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white font-medium text-sm xl:text-base hover:text-yellow-400 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Hamburger Menu Button - Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

        </div>

        {/* Mobile Menu */}
        <nav className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
          <div className="flex flex-col gap-4 py-4 border-t border-blue-700">
            {["Home", "About", "Services", "Career", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-white font-medium text-base hover:text-blue-400 transition-colors duration-300 py-2"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

      </div>
    </header>
  );
};

export default Header;
