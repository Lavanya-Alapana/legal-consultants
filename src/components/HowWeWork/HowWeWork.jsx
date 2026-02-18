import React from 'react';

const HowWeWork = () => {
  const steps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Share your property details and requirements with us through our consultation form or direct contact."
    },
    {
      step: "02",
      title: "Document Collection",
      description: "Submit all relevant property documents for comprehensive verification and legal analysis."
    },
    {
      step: "03",
      title: "Legal Verification",
      description: "Our expert team conducts thorough title verification, encumbrance checks, and legal due diligence."
    },
    {
      step: "04",
      title: "Legal Opinion",
      description: "Receive a detailed legal opinion report with clear recommendations and risk assessment."
    }
  ];

  return (
    <section id="how-we-work" className="py-16 md:py-24 bg-gradient-to-br from-slate-100 to-blue-50">
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A streamlined process to ensure thorough legal verification
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Vertical Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-blue-600 to-amber-400 z-0"></div>
              )}
              
              <div className="relative flex gap-6 mb-8">
                {/* Step Number Circle */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white font-bold text-xl">{item.step}</span>
                </div>
                
                {/* Content Card */}
                <div className="flex-1 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;
