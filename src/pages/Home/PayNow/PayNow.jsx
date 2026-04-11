const CheckIcon = () => (
  <svg
    className="text-gsps-green w-5 h-5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const PayNow = () => {
  return (
    <section className="py-16 bg-gsps-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gsps-blue">
              Pay Now, Complete Later
            </h2>
            <div className="border-t border-gray-200 pt-6">
              <div className="flex flex-wrap items-center gap-6 text-gsps-blue font-semibold">
                <div className="flex items-center space-x-2">
                  <CheckIcon />
                  <span>Pay 60% Now</span>
                </div>
                <div className="hidden sm:block border-l border-gray-300 h-6" />
                <div className="flex items-center space-x-2">
                  <CheckIcon />
                  <span>40% Within 4 Weeks</span>
                </div>
              </div>
              <p className="mt-4 text-gray-500 text-lg">
                Flexible, Student-Friendly Plan
              </p>
            </div>
            <button className="mt-8 px-8 py-3 bg-gsps-blue hover:bg-gsps-blue/90 text-white rounded-[4px] font-semibold shadow-lg transition-all active:scale-95">
              Check Eligibility
            </button>
          </div>

          {/* Right Column: Comparison Card */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-lg mx-auto lg:ml-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4">
                {/* Traditional Bank */}
                <div className="space-y-4">
                  <p className="text-center text-sm font-semibold text-gsps-blue">
                    Traditional Bank <span className="font-bold">$10,500</span>
                  </p>
                  <div className="bg-gray-100 rounded-lg py-6 text-center border border-gray-200">
                    <span className="text-2xl font-bold text-gsps-blue">$10,500</span>
                  </div>
                </div>

                {/* GSPS */}
                <div className="space-y-4">
                  <p className="text-center text-sm font-semibold text-gsps-blue">
                    With <span className="font-bold text-gsps-green">GSPS</span>
                  </p>
                  <div className="bg-gsps-green rounded-lg py-6 text-center shadow-lg sm:transform sm:scale-105 border border-gsps-green">
                    <span className="text-2xl font-bold text-white">$9,700</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="mt-10 flex justify-center">
                <button className="w-full sm:w-auto px-10 py-3 bg-gsps-blue hover:bg-gsps-blue/90 text-white rounded-[4px] font-semibold shadow-lg transition-all active:scale-95">
                  Try Calculator
                </button>
              </div>
            </div>

            {/* Decorative background shape */}
            {/* <div className="absolute -top-10 -right-10 w-32 h-32 bg-gsps-green/10 rounded-full blur-3xl -z-10" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PayNow;
