const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Logo */}
              <svg 
                className="w-12 h-12 flex-shrink-0" 
                viewBox="0 0 64 64" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="32" y1="8" x2="32" y2="54" stroke="#FACC15" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="22" y1="54" x2="42" y2="54" stroke="#FACC15" strokeWidth="3" strokeLinecap="round"/>
                <line x1="14" y1="16" x2="50" y2="16" stroke="#FACC15" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="18" y1="16" x2="14" y2="28" stroke="#FACC15" strokeWidth="1.8"/>
                <line x1="18" y1="16" x2="22" y2="28" stroke="#FACC15" strokeWidth="1.8"/>
                <line x1="46" y1="16" x2="42" y2="28" stroke="#FACC15" strokeWidth="1.8"/>
                <line x1="46" y1="16" x2="50" y2="28" stroke="#FACC15" strokeWidth="1.8"/>
                <ellipse cx="18" cy="30" rx="6" ry="2" stroke="#FACC15" strokeWidth="2" fill="none"/>
                <ellipse cx="46" cy="30" rx="6" ry="2" stroke="#FACC15" strokeWidth="2" fill="none"/>
              </svg>
              <div>
                <h3 className="text-2xl font-bold text-white">Vivek & Co.</h3>
                <p className="text-sm text-amber-400 font-semibold uppercase">Legal Consultants</p>
              </div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              Trusted legal experts specializing in property and land law in Telangana. Providing comprehensive legal opinions and consultation services.
            </p>
          </div>

          {/* Quick Links and Services Combined */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-2">
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-amber-400 mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "About Us", "Services", "Career", "Contact"].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-base"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold text-amber-400 mb-4">Our Services</h4>
              <ul className="space-y-3">
                {[
                  "Title Verification",
                  "Property Registration",
                  "Legal Opinion",
                  "Document Verification",
                  "Due Diligence",
                  "Legal Consultation"
                ].map((service) => (
                  <li key={service}>
                    <a 
                      href="#services"
                      className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-base"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-amber-400 mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919966283822" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-base">
                  +91 9966283822
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:vivek@getlegalopinion.com" className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-base">
                  vivek@getlegalopinion.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300 text-base">
                  Dilsukhnagar
       Hyderabad, Telangana
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-base font-semibold text-white mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-base text-center md:text-left">
              © {new Date().getFullYear()} Vivek & Co Legal Consultants. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-base">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-base">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-base">
                Disclaimer
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
