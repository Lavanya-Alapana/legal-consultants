const AboutHome = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 via-amber-50 to-white">
      <div className="container max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Expert Legal Team</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Trusted advocates with decades of combined experience serving clients across Telangana
          </p>
        </div>

        {/* Vivek Section */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-10 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300">
          <div className="grid md:grid-cols-[300px_1fr] gap-8 items-center">
            <div className="w-full max-w-[300px] mx-auto md:mx-0">
              <img 
                src="/vivek.jpg" 
                alt="Adv Vivekananda Goud" 
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
            <div>
              <div className="mb-4">
                <p className="text-yellow-700 font-semibold text-lg mb-1">Your Trusted Legal Partner in Telangana</p>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Adv Vivekananda Goud</h3>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                An experienced Civil Advocate based in Hyderabad, specializing in Issuance of legal opinion on property, 
                Title Search & Due Diligence, land registration, GPA, Sale Deed, Will Deed, Partition Deed Drafting, 
                and land dispute resolution.
              </p>
              <div className="flex items-start gap-2 text-slate-900 font-medium bg-yellow-50 p-3 rounded-lg">
                <span className="text-green-600 text-xl">✓</span>
                <p className="text-base md:text-lg">🎓 BSc, MBA, LL.B — Expert in Land & Property Law</p>
              </div>
            </div>
          </div>
        </div>

        {/* Srinath Section */}
        <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300">
          <div className="grid md:grid-cols-[1fr_300px] gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="mb-4">
                <p className="text-amber-700 font-semibold text-lg mb-1">Expert Family & Matrimonial Advocate in Hyderabad</p>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Adv. Srinath | Senior Advocate</h3>
              </div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                With over 16 years of extensive experience across civil and personal law, specializing in Family and 
                Matrimonial Litigation, Consumer Disputes, and Motor Accident Claims. Known for his client-centric 
                approach and in-depth legal knowledge.
              </p>
              <div className="flex items-start gap-2 text-slate-900 font-medium bg-yellow-50 p-3 rounded-lg">
                <span className="text-green-600 text-xl">✓</span>
                <p className="text-base md:text-lg">⚖️ Practicing in Hyderabad, Ranga Reddy, Medchal-Malkajgiri Districts</p>
              </div>
            </div>
            <div className="w-full max-w-[300px] mx-auto md:mx-0 order-1 md:order-2">
              <img 
                src="/srinath.jpg" 
                alt="Adv. Srinath" 
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
