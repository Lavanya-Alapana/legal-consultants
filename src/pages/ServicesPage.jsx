import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const services = [
    {
      id: 'matrimonial',
      title: 'Matrimonial Disputes',
      description: 'Compassionate legal support for family matters',
      icon: '⚖️',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop&q=80',
      items: [
        'Divorce Proceedings',
        'Mutual Consent Divorce',
        'Child Custody Matters',
        'Maintenance & Alimony',
        'Domestic Violence Cases',
        '498A IPC Cases'
      ]
    },
    {
      id: 'civil',
      title: 'Civil & Revenue Disputes',
      description: 'Expert solutions for property and civil matters',
      icon: '🏛️',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&q=80',
      items: [
        'Recovery of Money Suits',
        'Property Disputes',
        'Partition Suits',
        'Injunction Suits',
        'Title Disputes',
        'Revenue Cases (MRO, RDO, Collector)'
      ]
    },
    {
      id: 'criminal',
      title: 'Criminal Disputes',
      description: 'Strong defense for criminal cases',
      icon: '🛡️',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop&q=80',
      items: [
        'Bail Applications',
        '138 NI Act Cases',
        'ACB Cases',
        'Criminal Appeals',
        'FIR Quashing',
        'Criminal Defense'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&h=1080&fit=crop&q=80"
            alt="Legal Services"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-3xl">
            <div className="inline-block bg-amber-500 px-4 py-1 rounded-full mb-4">
              <span className="text-white font-medium text-sm">Our Services</span>
            </div>
            <h1 className="text-5xl font-bold mb-4 text-white">
              Legal Services
            </h1>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Comprehensive legal solutions with expertise in matrimonial, civil, revenue, and criminal law. We provide professional representation and consultation for all your legal needs.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Our experienced team is dedicated to protecting your rights and achieving the best possible outcomes for your case.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get Consultation
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
            Our Practice Areas
          </h2>
          <p className="text-gray-600">
            Expert legal representation across multiple domains
          </p>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={service.id}
              id={service.id}
              className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center bg-amber-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 p-8">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to={`/services/${service.id === 'civil' ? 'civil-revenue' : service.id}`}
                    className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-4 sm:px-5 py-2.5 rounded-lg font-semibold hover:bg-amber-600 transition-colors text-sm"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-4 sm:px-5 py-2.5 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors text-sm"
                  >
                    Contact Us
                  </Link>
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
            Need Legal Assistance?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us today for expert legal consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-amber-600 px-4 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Schedule Consultation
            </Link>
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-4 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
