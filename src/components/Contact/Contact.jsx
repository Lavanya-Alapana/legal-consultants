const Contact = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&h=1080&fit=crop&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container max-w-6xl mx-auto px-5 py-24 relative text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-amber-500 px-4 py-1 rounded-full mb-4">
              <span className="text-white font-medium text-sm">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Have a legal question? Our experienced team is here to help.<br />
              Reach out today for professional consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919966283822"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors text-sm sm:text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
              <a
                href="mailto:vivek@getlegalopinion.com"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors text-sm sm:text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100">
        <div className="container max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-amber-950 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-950 mb-2">Office Address</h3>
                    <p className="text-amber-900 leading-relaxed">
                      Vivek & Co Legal Consultants<br />
                      Dilsukhnagar<br />
                      Hyderabad, Telangana<br />
                      India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-950 mb-2">Phone</h3>
                    <a href="tel:+919966283822" className="text-amber-700 hover:text-amber-900 hover:underline">
                      +91 9966283822
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-950 mb-2">Email</h3>
                    <a href="mailto:vivek@getlegalopinion.com" className="text-amber-700 hover:text-amber-900 hover:underline">
                      vivek@getlegalopinion.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-950 mb-2">Working Hours</h3>
                    <p className="text-amber-900 leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-2xl border-2 border-amber-200">
              <h2 className="text-3xl font-bold text-amber-950 mb-6">Send Us a Message</h2>
              
              <form className="space-y-5" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name');
                const email = formData.get('email');
                const phone = formData.get('phone');
                const service = formData.get('service');
                const message = formData.get('message');
                
                // Format WhatsApp message
                const whatsappMessage = `*New Inquiry from Website*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Phone:* ${encodeURIComponent(phone)}%0A*Service:* ${encodeURIComponent(service)}%0A*Message:* ${encodeURIComponent(message)}`;
                
                // WhatsApp number (replace with actual number)
                const whatsappNumber = '919966283822';
                
                // Open WhatsApp
                window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
              }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-amber-950 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-amber-950 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-amber-950 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-amber-950 mb-2">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Matrimonial Disputes">Matrimonial Disputes</option>
                    <option value="Divorce Proceedings">Divorce Proceedings</option>
                    <option value="Child Custody">Child Custody</option>
                    <option value="Civil & Revenue Disputes">Civil & Revenue Disputes</option>
                    <option value="Property Disputes">Property Disputes</option>
                    <option value="Title Verification">Title Verification</option>
                    <option value="Criminal Disputes">Criminal Disputes</option>
                    <option value="Bail Applications">Bail Applications</option>
                    <option value="Cheque Bounce Cases">Cheque Bounce Cases (138 NI Act)</option>
                    <option value="Legal Consultation">General Legal Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-amber-950 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition resize-none"
                    placeholder="Tell us more about your legal needs..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-amber-950 mb-8 text-center">Find Us</h2>
          <div className="w-full h-96 bg-amber-100 rounded-xl overflow-hidden shadow-2xl border-2 border-amber-200">
            <iframe
              src="https://www.google.com/maps?q=17.363694,78.526306&hl=en&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dilsukhnagar, Hyderabad Office Location"
            ></iframe>
          </div>
          <p className="text-center text-amber-900 mt-4 text-sm font-medium">
            📍 Dilsukhnagar, Hyderabad, Telangana
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
