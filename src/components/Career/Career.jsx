const Career = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative text-white py-24 md:py-28 text-center overflow-hidden min-h-[450px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop" 
            alt="Join our team" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="container max-w-6xl mx-auto px-5 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Join Our Team</h1>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-16 md:py-15 lg:py-15 bg-white">
        <div className="container max-w-5xl mx-auto px-5 md:px-8">
          <div className="space-y-16">
            {/* Recent Graduates */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Recent Graduates</h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                Start your legal career with us. We seek recent graduates ready to apply their academic knowledge in real-world settings. Our firm offers a challenging and supportive environment where you can work on diverse cases, receive mentorship, and pursue continuous professional growth. Please send your detailed resume to{' '}
                <a 
                  href="mailto:vivek@getlegalopinion.com" 
                  className="text-yellow-700 hover:text-yellow-800 hover:underline transition-colors"
                >
                  vivek@getlegalopinion.com
                </a>.
              </p>
            </div>

            {/* Experienced Lawyers */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Experienced Lawyers</h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                Advance your career by joining our team. We seek accomplished lawyers with a strong track record of excellence and dedication. At our firm, you will lead significant cases, collaborate with diverse clients, and contribute to our success. If you are a highly motivated and experienced lawyer, please send your detailed resume to{' '}
                <a 
                  href="mailto:vivek@getlegalopinion.com" 
                  className="text-yellow-700 hover:text-yellow-800 hover:underline transition-colors"
                >
                  vivek@getlegalopinion.com
                </a>.
              </p>
            </div>

            {/* Interns and Paralegals */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Interns and Paralegals</h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                Join us as an intern or a paralegal and gain practical experience alongside seasoned lawyers. Our program offers a structured environment to enhance your legal skills and knowledge across various disciplines. Whether you are a student completing an internship or an entry-level paralegal, please send your detailed resume to{' '}
                <a 
                  href="mailto:vivek@getlegalopinion.com" 
                  className="text-yellow-700 hover:text-yellow-800 hover:underline transition-colors"
                >
                  vivek@getlegalopinion.com
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
