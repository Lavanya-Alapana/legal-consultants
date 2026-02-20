import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Matrimonial Disputes', path: '/services/matrimonial' },
    { name: 'Civil & Revenue Disputes', path: '/services/civil-revenue' },
    { name: 'Criminal Disputes', path: '/services/criminal' },
    { name: 'All Services', path: '/services' }
  ];

  return (
    <header className={`sticky top-0 w-full shadow-md z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-amber-100/70 backdrop-blur-md' 
        : 'bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-100'
    }`}>
      {/* Container */}
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-10 xl:px-10 py-2.5">
        <div className="flex justify-between items-center">

          {/* Left - Brand */}
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity duration-300">
            {/* Logo - Justice Scale */}
            <svg 
              className="w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 flex-shrink-0" 
              viewBox="0 0 64 64" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Center pole */}
              <line x1="32" y1="8" x2="32" y2="54" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round"/>
              {/* Base */}
              <line x1="22" y1="54" x2="42" y2="54" stroke="#78350F" strokeWidth="3" strokeLinecap="round"/>
              {/* Horizontal beam */}
              <line x1="14" y1="16" x2="50" y2="16" stroke="#78350F" strokeWidth="2.5" strokeLinecap="round"/>
              {/* Left scale strings */}
              <line x1="18" y1="16" x2="14" y2="28" stroke="#78350F" strokeWidth="1.8"/>
              <line x1="18" y1="16" x2="22" y2="28" stroke="#78350F" strokeWidth="1.8"/>
              {/* Right scale strings */}
              <line x1="46" y1="16" x2="42" y2="28" stroke="#78350F" strokeWidth="1.8"/>
              <line x1="46" y1="16" x2="50" y2="28" stroke="#78350F" strokeWidth="1.8"/>
              {/* Left pan */}
              <ellipse cx="18" cy="30" rx="6" ry="2" stroke="#78350F" strokeWidth="2" fill="none"/>
              {/* Right pan */}
              <ellipse cx="46" cy="30" rx="6" ry="2" stroke="#78350F" strokeWidth="2" fill="none"/>
            </svg>
            
            <div>
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-amber-950 tracking-wide leading-tight">
                Vivek & Co.
              </h1>
              <div className="border-t border-amber-900 mt-0.5 mb-0.5"></div>
              <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-amber-900 font-semibold tracking-wider uppercase">
                Legal Consultants
              </p>
            </div>
          </Link>

          {/* Right - Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 xl:gap-10 items-center">
            <Link
              to="/"
              className="text-amber-950 font-semibold text-sm xl:text-base hover:text-amber-800 transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-900 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/about"
              className="text-amber-950 font-semibold text-sm xl:text-base hover:text-amber-800 transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-900 group-hover:w-full transition-all duration-300" />
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="text-amber-950 font-semibold text-sm xl:text-base hover:text-amber-800 transition-colors duration-300 relative group flex items-center gap-1"
              >
                Services
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-900 group-hover:w-full transition-all duration-300" />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-64 bg-amber-50 rounded-lg shadow-2xl overflow-hidden transition-all duration-300 border-2 border-amber-300 ${
                isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                {services.map((service, idx) => (
                  <Link
                    key={idx}
                    to={service.path}
                    className="block px-6 py-3 text-amber-900 hover:bg-amber-100 hover:text-amber-950 transition-colors duration-200 border-b border-amber-200 last:border-b-0 font-medium"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/career"
              className="text-amber-950 font-semibold text-sm xl:text-base hover:text-amber-800 transition-colors duration-300 relative group"
            >
              Career
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-900 group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              to="/contact"
              className="text-amber-950 font-semibold text-sm xl:text-base hover:text-amber-800 transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-900 group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>

          {/* Hamburger Menu Button - Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-amber-950 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-amber-950 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-amber-950 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

        </div>

        {/* Mobile Menu */}
        <nav className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[600px] mt-4' : 'max-h-0'}`}>
          <div className="flex flex-col gap-4 py-4 border-t border-amber-800">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-amber-950 font-medium text-base hover:text-amber-800 transition-colors duration-300 py-2"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-amber-950 font-medium text-base hover:text-amber-800 transition-colors duration-300 py-2"
            >
              About
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full text-left text-amber-950 font-medium text-base hover:text-amber-800 transition-colors duration-300 py-2 flex items-center justify-between"
              >
                Services
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pl-4 mt-2 space-y-2">
                  {services.map((service, idx) => (
                    <Link
                      key={idx}
                      to={service.path}
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                      className="block text-amber-800 text-sm hover:text-amber-950 transition-colors duration-300 py-2"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/career"
              onClick={() => setIsMenuOpen(false)}
              className="text-amber-950 font-medium text-base hover:text-amber-800 transition-colors duration-300 py-2"
            >
              Career
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="text-amber-950 font-medium text-base hover:text-amber-800 transition-colors duration-300 py-2"
            >
              Contact
            </Link>
          </div>
        </nav>

      </div>
    </header>
  );
};

export default Header;
