const WhyChoos = () => {
  const features = [
    {
      icon: "/WhyChooseIcon/batterexchangerate.jpeg",
      title: "Better Exchange Rates",
      subtext: "Save up to 15% on transfers",
    },
    {
      icon: "/WhyChooseIcon/lowfee.jpeg",
      title: "Low Fees",
      subtext: "No hidden costs",
    },
    {
      icon: "/WhyChooseIcon/buildforstudent.jpeg",
      title: "Built for Students",
      subtext: "Tailored for tuition payments",
    },
    {
      icon: "/WhyChooseIcon/secureVerified.jpeg",
      title: "Secure & Verified",
      subtext: "Advanced KYC & security",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gsps-blue mb-8">
          Why Choose GSPS?
        </h2>

        <div className="border-t border-gray-100 pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-10 lg:gap-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 lg:px-6 ${
                  index !== features.length - 1
                    ? "lg:border-r lg:border-gray-100"
                    : ""
                }`}
              >
                <div className="flex-shrink-0 p-2 bg-gsps-bg-light/30 rounded-lg">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gsps-blue leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {feature.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoos;
