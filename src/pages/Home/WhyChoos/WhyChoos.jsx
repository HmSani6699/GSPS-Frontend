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
        <h2 className="text-2xl md:text-3xl font-bold text-gsps-blue text-center mb-8">
          Why Choose GSPS?
        </h2>

        <div className="border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 lg:px-6 ${
                  index !== features.length - 1
                    ? "lg:border-r lg:border-gray-200"
                    : ""
                }`}
              >
                <div className="flex-shrink-0">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-[17px] font-bold text-gsps-blue leading-tight">
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
