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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gsps-blue text-center mb-16">
          Built for Students Worldwide
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-6 p-4 rounded-2xl bg-gsps-bg-light/30 group-hover:bg-gsps-bg-light/50 transition-colors duration-300">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-24 h-24 md:w-32 md:h-32 object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-gsps-blue font-bold text-base md:text-lg leading-tight px-2">
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
