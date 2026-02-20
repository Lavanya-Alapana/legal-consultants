import { Link } from 'react-router-dom';

const CriminalPage = () => {
  const services = [
    {
      title: 'Bail Applications',
      description: 'Swift bail proceedings for regular and anticipatory bail',
      icon: '🔓'
    },
    {
      title: '138 NI Act Cases',
      description: 'Expert handling of cheque bounce and dishonor cases',
      icon: '📝'
    },
    {
      title: 'ACB Cases',
      description: 'Defense in Anti-Corruption Bureau investigations',
      icon: '🔍'
    },
    {
      title: 'Criminal Appeals',
      description: 'Appellate representation in higher courts',
      icon: '⚖️'
    },
    {
      title: 'FIR Quashing',
      description: 'Petitions to quash false or frivolous FIRs',
      icon: '🚫'
    },
    {
      title: 'Criminal Defense',
      description: 'Comprehensive defense in contested criminal cases',
      icon: '🛡️'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop&q=80" 
            alt="Criminal Law" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-3xl">
            <div className="inline-block bg-amber-500 px-4 py-1 rounded-full mb-4">
              <span className="text-white font-medium text-sm">Criminal Law</span>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-white">
              Criminal Disputes
            </h1>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Facing criminal charges can be overwhelming. Our experienced criminal defense team provides aggressive representation and strategic defense for all types of criminal cases. From bail applications to appeals, we stand by your side at every stage of the legal process.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              We understand the stress and uncertainty that comes with criminal proceedings. With our proven track record and 24/7 availability, we ensure your rights are protected and your voice is heard in court.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-4 sm:px-4 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors text-sm sm:text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Help Now
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors text-sm sm:text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            Complete legal support for criminal cases
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
            Need Legal Defense?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us today for expert criminal law representation
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 px-4 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Lawyer
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-4 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors text-sm sm:text-base"
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

export default CriminalPage;
