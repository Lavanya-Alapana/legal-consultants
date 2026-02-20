import { Link } from 'react-router-dom';

const CivilRevenuePage = () => {
  const services = [
    {
      title: 'Recovery of Money Suits',
      description: 'Legal action for debt recovery and financial claims',
      icon: '💵'
    },
    {
      title: 'Property Disputes',
      description: 'Resolution of land and property ownership conflicts',
      icon: '🏘️'
    },
    {
      title: 'Partition Suits',
      description: 'Fair division of joint property among co-owners',
      icon: '📐'
    },
    {
      title: 'Injunction Suits',
      description: 'Court orders to prevent unlawful actions',
      icon: '🚫'
    },
    {
      title: 'Title Disputes',
      description: 'Establishing clear ownership and property rights',
      icon: '📜'
    },
    {
      title: 'Revenue Cases',
      description: 'MRO, RDO and Collector level revenue matters',
      icon: '🏛️'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop&q=80" 
            alt="Civil & Revenue Law" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-3xl">
            <div className="inline-block bg-amber-500 px-4 py-1 rounded-full mb-4">
              <span className="text-white font-medium text-sm">Civil & Revenue Law</span>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-white">
              Civil & Revenue Disputes
            </h1>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Property disputes and revenue matters require specialized legal expertise. Our team has extensive experience in handling complex civil cases, from property ownership conflicts to revenue proceedings at MRO, RDO, and Collector levels.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Whether you're dealing with partition suits, title disputes, or money recovery cases, we provide strategic legal solutions tailored to your specific situation. Our transparent approach ensures you understand every step of the legal process.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Help Now
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our Services
          </h2>
          <p className="text-gray-600">
            Complete legal support for civil and revenue cases
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white border-l-4 border-amber-500 rounded-r-xl shadow-md hover:shadow-xl transition-all p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Resolve Your Dispute Today
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Get expert legal consultation for your civil or revenue matter
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-xs sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Lawyer
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors text-xs sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CivilRevenuePage;
