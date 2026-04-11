const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: "/HowItWorkIcon/CreateYourAcount.jpeg",
      title: "Create Your Account",
    },
    {
      id: 2,
      icon: "/HowItWorkIcon/verifyYourStudent.jpeg",
      title: "Verify Your Student Status",
    },
    {
      id: 3,
      icon: "/HowItWorkIcon/paytuition.jpeg",
      title: "Pay Tuition Globally",
    },
    {
      id: 4,
      icon: "/HowItWorkIcon/ChooseFlexible.jpeg",
      title: "Choose Flexible Payment",
    },
  ];

  return (
    <section className="py-10 bg-white border-b border-gray-100 max-w-[1200px] mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gsps-blue text-center mb-16">
          How It Works
        </h2>

        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-12 lg:gap-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex lg:items-center w-full lg:w-auto">
              <div className="flex flex-col items-center flex-1 bg-gsps-bg-light/50 rounded-xl p-8 lg:p-6 border border-gsps-blue/5 hover:shadow-lg transition-shadow duration-300 relative">
                <div className="absolute -top-5 left-6 mb-4">
                  <span className="w-10 h-10 rounded-full bg-[#d7e8df] text-gsps-blue flex items-center justify-center font-bold text-base border border-blue-200 shadow-sm">
                    {step.id}
                  </span>
                </div>
                <div className="flex items-center space-x-6 lg:space-x-4 w-full">
                  <div className="flex-shrink-0">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-16 lg:h-16 object-contain"
                    />
                  </div>
                  <h3 className="text-gsps-blue font-bold text-lg lg:text-base leading-tight">
                    {step.title}
                  </h3>
                </div>
              </div>

              {/* Arrow Connector for Desktop Only */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:flex items-center mx-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#01b46a]"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
