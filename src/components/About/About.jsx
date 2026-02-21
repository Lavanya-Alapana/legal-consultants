const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative text-white py-20 md:py-24 text-center overflow-hidden min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop" 
            alt="Legal team consultation" 
            className="w-full h-full object-cover brightness-[0.35]"
          />
        </div>
        <div className="container max-w-6xl mx-auto px-5 relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5">Meet Vivek & Co Legal Consultants</h1>
          <p className="text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            At Vivek & Co Legal Consultants, our team of advocates in Hyderabad is committed to 
            delivering professional legal support. With years of experience, a client-focused approach, and 
            a proven track record of success, we are well-equipped to handle any legal challenge. 
            Connect with Vivek & Co Legal Consultants for trusted legal advice from experienced 
            lawyers in Hyderabad.
          </p>
        </div>
      </section>

      {/* Professional Background Section */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-5">
          <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
            <div className="w-full max-w-[250px] mx-auto md:mx-0 relative md:sticky md:top-5">
              <img 
                src="/vivek.jpg" 
                alt="Legal consultation" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-amber-900 mb-8">Professional Background</h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-5">
                I am Vivek & Co Legal Consultants, a dedicated property and civil lawyer based in Hyderabad, 
                Telangana. With experience in the legal field, I specialize in land registration, property 
                documentation, title verification, and civil litigation.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-5">
                Our journey in law began with a deep commitment to helping individuals navigate the complex 
                world of property transactions. I believe that every client deserves clear, honest, and 
                affordable legal guidance, especially when it comes to their most valuable assets — their properties.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-5">
                I practice primarily at the Hyderabad District Court and have successfully handled numerous 
                cases involving property disputes, registration matters, and civil litigation. Our approach 
                is client-centric, ensuring that each person I represent receives personalized attention and 
                professional legal counsel.
              </p>

              <div className="mt-10 bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-amber-900 mb-5">Key Practice Areas</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="py-2.5 px-4 bg-amber-50 border-l-4 border-amber-600 text-amber-900 font-medium">Legal Opinion on Property Transactions</li>
                  <li className="py-2.5 px-4 bg-amber-50 border-l-4 border-amber-600 text-amber-900 font-medium">Title Search & Due Diligence</li>
                  <li className="py-2.5 px-4 bg-amber-50 border-l-4 border-amber-600 text-amber-900 font-medium">Civil & Criminal Litigation</li>
                  <li className="py-2.5 px-4 bg-amber-50 border-l-4 border-amber-600 text-amber-900 font-medium">Land and Revenue Matters</li>
                  <li className="py-2.5 px-4 bg-amber-50 border-l-4 border-amber-600 text-amber-900 font-medium">Family Settlements & Inheritance</li>
                  <li className="py-2.5 px-4 bg-amber-50 border-l-4 border-amber-600 text-amber-900 font-medium">Property Disputes & Verification</li>
                  <li className="py-2.5 px-4 bg-amber-50 border-l-4 border-amber-600 text-amber-900 font-medium">Partition and Succession Suits</li>
                  <li className="py-2.5 px-4 bg-amber-50 border-l-4 border-amber-600 text-amber-900 font-medium">Injunction Orders & Legal Remedies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-10 text-center">Our Team</h2>
          
          <div className="bg-gray-50 p-8 md:p-10 rounded-lg shadow-md grid md:grid-cols-[250px_1fr] gap-10 items-start">
            <div className="w-full max-w-[250px] mx-auto md:mx-0">
              <img 
                  src="/srinath.jpg" 
                alt="Adv. Srinath" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-2">Adv. Srinath</h3>
              <h4 className="text-lg md:text-xl text-amber-700 font-semibold mb-5">Senior Advocate | Family & Matrimonial Law</h4>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-5">
                With over 16 years of extensive experience across civil and personal law, I am highly 
                regarded for Our work in Family and Matrimonial Litigation, Consumer Disputes, Motor 
                Accident Claims, and a wide range of Civil and Criminal matters.
              </p>

              <div className="my-8">
                <h5 className="text-xl font-bold text-amber-900 mb-4">Areas of Practice:</h5>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="py-2.5 px-4 bg-white border-l-4 border-amber-600 text-amber-900 font-medium">Family & Matrimonial Litigation</li>
                  <li className="py-2.5 px-4 bg-white border-l-4 border-amber-600 text-amber-900 font-medium">Consumer Forum Representation</li>
                  <li className="py-2.5 px-4 bg-white border-l-4 border-amber-600 text-amber-900 font-medium">Motor Accident Compensation</li>
                  <li className="py-2.5 px-4 bg-white border-l-4 border-amber-600 text-amber-900 font-medium">Cheque Bounce Cases (Sec. 138 NI Act)</li>
                  <li className="py-2.5 px-4 bg-white border-l-4 border-amber-600 text-amber-900 font-medium">Money Recovery Suits</li>
                  <li className="py-2.5 px-4 bg-white border-l-4 border-amber-600 text-amber-900 font-medium">Contractual Disputes</li>
                  <li className="py-2.5 px-4 bg-white border-l-4 border-amber-600 text-amber-900 font-medium">Execution Petitions</li>
                  <li className="py-2.5 px-4 bg-white border-l-4 border-amber-600 text-amber-900 font-medium">Rent Control & Lease Disputes</li>
                </ul>
              </div>

              <p className="text-base italic text-gray-600 mt-5">
                Known for Our client-centric approach and in-depth legal understanding, I provide trusted 
                legal services across Hyderabad, Ranga Reddy, Medchal-Malkajgiri, and surrounding jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
