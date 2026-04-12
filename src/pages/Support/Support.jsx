import { useState } from "react";

const Support = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqData = [
    {
      question: "How do I make a payment for my tuition?",
      answer: "Making a payment is simple. Navigate to the 'Savings Calculator', calculate your fees, and click 'Pay Now'. You can then choose your preferred payment method and follow the on-screen instructions."
    },
    {
      question: "What currencies are supported?",
      answer: "GSPS supports major global currencies including USD, GBP, EUR, CAD, and AUD, as well as many local currencies from students' home countries."
    },
    {
      question: "How long does it take for the payment to be processed?",
      answer: "Most payments are processed within 24-48 business hours. However, bank transfers might take up to 3-5 business days depending on the banks involved."
    },
    {
      question: "Is GSPS secure for international students?",
      answer: "Yes, GSPS uses industry-standard encryption and security protocols to ensure your data and transactions are always protected. We are fully compliant with global financial regulations."
    },
    {
      question: "Can I cancel a payment once made?",
      answer: "Payments can be cancelled if they haven't been processed by the recipient bank. Please contact our support team immediately if you need to initiate a cancellation."
    }
  ];

  const categories = [
    { id: 1, title: "Getting Started", icon: "🚀", count: "12 articles" },
    { id: 2, title: "Payments & Fees", icon: "💳", count: "25 articles" },
    { id: 3, title: "Account & Security", icon: "🔐", count: "18 articles" },
    { id: 4, title: "Savings Calculator", icon: "📊", count: "10 articles" },
    { id: 5, title: "Compliance & KYC", icon: "📋", count: "8 articles" },
    { id: 6, title: "Refunds & Cancellations", icon: "🔄", count: "14 articles" },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-24 bg-gsps-bg-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 items-center gap-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gsps-blue mb-6 leading-tight">
                How Can We <span className="text-gsps-green font-outline-2">Help You</span> Today?
              </h1>
              <p className="text-xl text-gsps-blue/70 mb-8 max-w-lg">
                Search our knowledge base or browse help topics below to find the answers you need.
              </p>
              
              <div className="relative max-w-xl group">
                <input 
                  type="text" 
                  placeholder="Ask a question..."
                  className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-transparent shadow-xl focus:border-gsps-green/30 focus:outline-none transition-all placeholder:text-gray-400 pl-14"
                />
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-gsps-green transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-gsps-green text-white px-6 py-2 rounded-xl font-bold hover:bg-gsps-green/90 transition-all shadow-lg active:scale-95">
                  Search
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="text-sm font-medium text-gsps-blue/60 mr-2">Popular:</span>
                {["Payments", "Fees", "KYC Verification", "Savings"].map(tag => (
                  <button key={tag} className="text-xs font-semibold px-3 py-1 bg-white rounded-full border border-gray-100 text-gsps-blue hover:border-gsps-green transition-all shadow-sm">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative animate-float">
                <img 
                  src="/images/support-hero.png" 
                  alt="Support Hero" 
                  className="w-full h-auto rounded-3xl"
                />
                {/* Decorative floating elements */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-gsps-green/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gsps-blue/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gsps-blue mb-4">Browse Help by Category</h2>
            <div className="w-20 h-1.5 bg-gsps-green mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-2xl hover:border-gsps-green/20 transition-all cursor-pointer group"
              >
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform inline-block">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gsps-blue mb-2 group-hover:text-gsps-green transition-colors">
                  {category.title}
                </h3>
                <p className="text-gsps-blue/50 text-sm mb-4">
                  Find detailed guides and solutions for {category.title.toLowerCase()}.
                </p>
                <div className="flex items-center text-gsps-green font-semibold text-xs uppercase tracking-wider">
                  <span>View Articles ({category.count})</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gsps-bg-light/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gsps-blue mb-4">Frequently Asked Questions</h2>
            <p className="text-gsps-blue/60">Quick answers to common questions about GSPS.</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-gsps-blue text-lg pr-8">{faq.question}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-gsps-bg-light flex items-center justify-center transition-transform duration-300 ${activeFaq === index ? "rotate-45" : ""}`}>
                    <svg className="w-5 h-5 text-gsps-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === index ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-gsps-blue/70 leading-relaxed pt-2 border-t border-gray-50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gsps-blue/5 skew-x-12 translate-x-20 rounded-l-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gsps-blue mb-4">Still Need Help?</h2>
            <p className="text-gsps-blue/60">Our dedicated support team is available 24/7 to assist you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gsps-blue text-white text-center shadow-2xl shadow-gsps-blue/30 transform hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">Live Chat</h3>
              <p className="text-blue-100/60 mb-8 text-sm">Talk to a support specialist instantly.</p>
              <button className="w-full bg-gsps-green text-white py-3 rounded-xl font-bold hover:bg-gsps-green/90 transition-all shadow-lg active:scale-95">
                Start Chatting
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-100 text-center shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-gsps-bg-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gsps-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gsps-blue mb-2">Email Us</h3>
              <p className="text-gsps-blue/50 mb-8 text-sm">Send us a message and we'll reply within 2 hours.</p>
              <button className="w-full bg-gsps-blue text-white py-3 rounded-xl font-bold hover:bg-gsps-blue/90 transition-all shadow-lg active:scale-95">
                Send Email
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-100 text-center shadow-xl hover:shadow-2xl transition-shadow transform hover:-translate-y-2 transition-transform">
              <div className="w-16 h-16 bg-gsps-bg-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gsps-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gsps-blue mb-2">Call Us</h3>
              <p className="text-gsps-blue/50 mb-8 text-sm">Available Mon-Fri from 9am to 6pm GMT.</p>
              <button className="w-full border-2 border-gsps-blue text-gsps-blue py-3 rounded-xl font-bold hover:bg-gsps-blue hover:text-white transition-all active:scale-95">
                +1 (800) GSPS-HELP
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
