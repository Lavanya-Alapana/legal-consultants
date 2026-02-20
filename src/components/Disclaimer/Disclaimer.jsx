import { useState, useEffect } from 'react';

const Disclaimer = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    // Check if user has already accepted the disclaimer
    const hasAccepted = localStorage.getItem('disclaimerAccepted');
    if (!hasAccepted) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true');
    setShowDisclaimer(false);
  };

  if (!showDisclaimer) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Semi-transparent overlay - shows website behind */}
      <div 
        className="absolute inset-0 bg-black/40"
        onClick={(e) => e.stopPropagation()}
      ></div>
      
      {/* Disclaimer Card */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg max-h-[85vh] overflow-y-auto">
        {/* Content */}
        <div className="p-5 sm:p-7">
          {/* Icon & Heading */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">Disclaimer</h2>
              <p className="text-xs text-gray-500">Please read before continuing</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-2.5 sm:space-y-3 text-gray-700 text-sm leading-relaxed mb-5 sm:mb-6">
            <p className="font-semibold text-gray-900 text-sm">
              Vivek & Co Legal Consultants
            </p>
            
            <p className="text-xs text-gray-600">
              The Bar Council of India does not permit the solicitation of work and advertising by legal practitioners/advocates. By accessing our website, you acknowledge that:
            </p>

            <ul className="space-y-2 sm:space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>You wish to gain more information for personal use with no solicitation or advertisement.</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Accessing this website does not establish an Advocate–Client relationship.</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Content should not be interpreted as legal advice or opinion.</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>This site uses cookies. By continuing, you agree to our Cookie and Privacy Policy.</span>
              </li>
            </ul>
          </div>

          {/* Accept Button */}
          <button
            onClick={handleAccept}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-3 sm:py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <span>I Accept & Continue</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
          <p className="text-xs text-gray-400 text-center mt-3">
            By accepting, you can explore our website
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
