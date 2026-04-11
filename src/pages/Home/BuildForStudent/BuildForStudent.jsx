const BuildForStudent = () => {
  const features = [
    {
      icon: "/BuildForStudentWorldwideIcon/PassportVisaVerified.jpeg",
      title: "Passport & Visa Verified",
    },
    {
      icon: "/BuildForStudentWorldwideIcon/UniversityApproved.jpeg",
      title: "University Approved",
    },
    {
      icon: "/BuildForStudentWorldwideIcon/MultiCurrencyWallet.jpeg",
      title: "Multi-Currency Wallet",
    },
    {
      icon: "/BuildForStudentWorldwideIcon/TrackYourPayments.jpeg",
      title: "Track Your Payments",
    },
  ];

  return (
    <section className="py-10 bg-white max-w-[1200px] mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gsps-blue text-center mb-12">
          Built for Students Worldwide
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-4 p-4 rounded-2xl bg-gsps-bg-light/30 group-hover:bg-gsps-bg-light/50 transition-colors duration-300">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-gsps-blue font-bold text-lg md:text-xl leading-tight px-2">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuildForStudent;
