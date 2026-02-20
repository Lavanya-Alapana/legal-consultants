const Hero = () => {
  return (
    <section className="relative text-amber-950 py-20 md:py-15 overflow-hidden">
      {/* Background Image with Yellow Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/90 via-amber-200/90 to-yellow-650/95"></div>
      </div>

      <div className="relative w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-amber-950">
              Information Resource for Land & Property Law in Telangana
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-amber-700 font-semibold mb-8">
              Presented by Vivek & Co Legal Consultants
            </p>
            
            <a 
              href="tel:+919966283822"
              className="relative inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 shadow-xl mb-8 hover:scale-105 animate-shake-ring"
            >
              {/* Ripple Animation Rings */}
              <span className="absolute -inset-2 rounded-lg bg-amber-500 animate-ping opacity-40"></span>
              <span className="absolute inset-0 rounded-lg bg-amber-600"></span>
              
              {/* Button Content */}
              <span className="relative flex items-center gap-3">
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
            
            <div className="bg-white border-l-4 border-amber-600 p-6 rounded-r-lg shadow-xl text-left">
              <p className="text-sm md:text-base text-amber-900 leading-relaxed">
                This website is designed to provide general legal information on title verification, property registration, and land-related matters in Telangana. It is not intended as a source of legal advice and does not create any Advocate–Client relationship.
              </p>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="hidden lg:block">
            <svg viewBox="0 0 500 500" className="w-full h-auto drop-shadow-2xl">
              {/* Building/Property */}
              <rect x="150" y="150" width="200" height="250" fill="#F59E0B" opacity="0.95"/>
              <rect x="170" y="180" width="40" height="40" fill="#FFFBEB"/>
              <rect x="230" y="180" width="40" height="40" fill="#FFFBEB"/>
              <rect x="290" y="180" width="40" height="40" fill="#FFFBEB"/>
              <rect x="170" y="240" width="40" height="40" fill="#FFFBEB"/>
              <rect x="230" y="240" width="40" height="40" fill="#FFFBEB"/>
              <rect x="290" y="240" width="40" height="40" fill="#FFFBEB"/>
              <rect x="170" y="300" width="40" height="40" fill="#FFFBEB"/>
              <rect x="230" y="300" width="40" height="40" fill="#FFFBEB"/>
              <rect x="290" y="300" width="40" height="40" fill="#FFFBEB"/>
              <rect x="220" y="350" width="60" height="50" fill="#D97706"/>
              
              {/* Document/Contract */}
              <rect x="50" y="250" width="120" height="150" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="4" rx="5"/>
              <line x1="70" y1="280" x2="150" y2="280" stroke="#D97706" strokeWidth="2"/>
              <line x1="70" y1="300" x2="150" y2="300" stroke="#D97706" strokeWidth="2"/>
              <line x1="70" y1="320" x2="150" y2="320" stroke="#D97706" strokeWidth="2"/>
              <line x1="70" y1="340" x2="130" y2="340" stroke="#D97706" strokeWidth="2"/>
              
              {/* Signature line */}
              <line x1="70" y1="370" x2="150" y2="370" stroke="#F59E0B" strokeWidth="3"/>
              
              {/* Pen */}
              <line x1="140" y1="360" x2="160" y2="340" stroke="#D97706" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="162" cy="338" r="3" fill="#F59E0B"/>
              
              {/* Justice Scale */}
              <g transform="translate(360, 80)">
                <line x1="40" y1="10" x2="40" y2="70" stroke="#F59E0B" strokeWidth="3"/>
                <line x1="25" y1="70" x2="55" y2="70" stroke="#F59E0B" strokeWidth="3"/>
                <line x1="15" y1="20" x2="65" y2="20" stroke="#F59E0B" strokeWidth="3"/>
                <line x1="25" y1="20" x2="20" y2="35" stroke="#F59E0B" strokeWidth="2"/>
                <line x1="25" y1="20" x2="30" y2="35" stroke="#F59E0B" strokeWidth="2"/>
                <ellipse cx="25" cy="37" rx="8" ry="3" stroke="#F59E0B" strokeWidth="2" fill="none"/>
                <line x1="55" y1="20" x2="50" y2="35" stroke="#F59E0B" strokeWidth="2"/>
                <line x1="55" y1="20" x2="60" y2="35" stroke="#F59E0B" strokeWidth="2"/>
                <ellipse cx="55" cy="37" rx="8" ry="3" stroke="#F59E0B" strokeWidth="2" fill="none"/>
              </g>
              
              {/* Checkmark/Approval */}
              <circle cx="380" cy="320" r="35" fill="#F59E0B" opacity="0.95"/>
              <path d="M 365 320 L 375 330 L 395 310" stroke="#FFFBEB" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
