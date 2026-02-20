import React from 'react';

const WhyChoose = () => {
  const reasons = [
    {
      title: "Expert Legal Team",
      description: "Our team of experienced advocates specializes in property and land law with deep knowledge of Telangana regulations."
    },
    {
      title: "Proven Track Record",
      description: "Successfully handled thousands of property verification cases with a high success rate in legal opinion delivery."
    },
    {
      title: "Transparent Process",
      description: "Clear communication and transparent pricing with no hidden costs. You know exactly what to expect."
    },
    {
      title: "Quick Turnaround",
      description: "Efficient document verification and legal opinion delivery within committed timelines."
    }
  ];

  return (
    <section id="why-choose" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100">
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-amber-950 mb-4">
            Why Choose Vivek & Co
          </h2>
          <p className="text-lg text-amber-900 max-w-2xl mx-auto">
            Trusted legal consultants with expertise in Telangana property law
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border-2 border-amber-300 hover:border-amber-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="text-white font-bold text-xl">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-amber-950 mb-3">{reason.title}</h3>
              <p className="text-amber-800">{reason.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
