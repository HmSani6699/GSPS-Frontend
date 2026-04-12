const About = () => {
  const stats = [
    { label: "Students Served", value: "10,000+", icon: "👨‍🎓" },
    { label: "Countries Supported", value: "50+", icon: "🌍" },
    { label: "Tuition Saved", value: "$2M+", icon: "💰" },
    { label: "Partner Institutions", value: "500+", icon: "🏫" },
  ];

  const values = [
    {
      title: "Transparency",
      description: "No hidden fees. We believe in clear, upfront pricing for every transaction.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Security",
      description: "Bank-level encryption and rigorous compliance to keep your funds safe.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Speed",
      description: "Fast processing to ensure your tuition arrives before the deadline.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Student-First",
      description: "Designed specifically for the unique needs of international students.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gsps-bg-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-gsps-green/10 text-gsps-green font-bold text-sm mb-6 uppercase tracking-wider">
                Our Journey
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gsps-blue mb-8 leading-tight">
                Empowering Students to <span className="text-gsps-green">Global Success</span>
              </h1>
              <p className="text-xl text-gsps-blue/70 mb-10 leading-relaxed max-w-xl">
                GSPS was founded with a single mission: to remove the financial barriers that prevent talented students from pursuing their dreams abroad.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gsps-green text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-gsps-green/20 hover:bg-gsps-green/90 transition-all active:scale-95">
                  Join Our Mission
                </button>
                <button className="bg-white text-gsps-blue px-8 py-4 rounded-xl font-bold border border-gray-200 hover:border-gsps-green transition-all shadow-sm">
                  View Our Impact
                </button>
              </div>
            </div>
            <div className="mt-16 lg:mt-0 relative">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="/images/about-hero.png" 
                  alt="About GSPS Students" 
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative Blur Elements */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-gsps-green/20 rounded-full blur-[80px]"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gsps-blue/20 rounded-full blur-[80px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gsps-blue mb-6">Our Mission & Vision</h2>
          <p className="text-lg text-gsps-blue/60 max-w-3xl mx-auto leading-relaxed">
            We are building a world where the quality of your education isn't limited by your location or currency. GSPS provides the bridge between your hometown and your dream university.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div className="p-10 rounded-[40px] bg-gsps-blue text-white shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">🎯</span>
              Our Mission
            </h3>
            <p className="text-blue-100/80 leading-relaxed">
              To provide international students with a seamless, secure, and cost-effective way to pay their tuition and living expenses, saving them thousands in hidden bank fees.
            </p>
          </div>
          <div className="p-10 rounded-[40px] bg-gsps-green text-white shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4">🔭</span>
              Our Vision
            </h3>
            <p className="text-green-50 leading-relaxed">
              To become the global standard for student financial services, empowering 1 million students by 2030 to study anywhere in the world without financial friction.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gsps-bg-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gsps-blue mb-6">Values That Drive Us</h2>
            <div className="w-24 h-1.5 bg-gsps-green mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-3xl border border-gray-100 hover:border-gsps-green/20 hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gsps-bg-light text-gsps-green flex items-center justify-center mb-6 group-hover:bg-gsps-green group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gsps-blue mb-4">{value.title}</h3>
                <p className="text-gsps-blue/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gsps-blue rounded-[50px] p-12 md:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 translate-x-20"></div>
            
            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-4">
                  <div className="text-4xl md:text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-blue-200 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gsps-blue mb-8">Want to Join the Revolution?</h2>
          <p className="text-lg text-gsps-blue/60 mb-10 leading-relaxed">
            We are always looking for passionate individuals who believe in the power of education. Explore our careers or partner with us today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gsps-green text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-gsps-green/20 hover:bg-gsps-green/90 transition-all active:scale-95">
              Contact Sales
            </button>
            <button className="bg-gsps-blue text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-gsps-blue/20 hover:bg-gsps-blue/90 transition-all active:scale-95">
              View Openings
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
