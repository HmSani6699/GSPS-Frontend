import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gsps-bg-light pt-8 pb-12 lg:pt-10 lg:pb-20">
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-100/40 rounded-full blur-[80px] md:blur-[120px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(186,230,253,0.4),transparent_50%)] -z-10" />

      {/* Abstract Cloud Shapes - Hidden on small mobile */}
      <div className="hidden sm:block absolute top-20 right-[20%] w-32 h-16 bg-white/40 rounded-full blur-xl -z-10" />
      <div className="hidden sm:block absolute top-40 right-[10%] w-48 h-20 bg-white/30 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-20 right-[30%] w-64 h-24 bg-white/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="text-center lg:text-left lg:col-span-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[43px] tracking-tight font-extrabold text-gsps-blue leading-[1.8] lg:leading-[1.4]">
              Pay Your Tuition Globally — <br className="hidden lg:block" />
              Save More as a Student
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Send tuition payments worldwide with lower fees, better exchange
              rates, and flexible payment options designed for students.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4 px-4 sm:px-0">
              <Link
                to="/signup"
                className="w-full sm:w-auto rounded-[4px] text-white text-[16px] px-[30px] py-[12px] bg-gsps-green hover:bg-gsps-green/90 transition-all shadow-lg hover:shadow-xl active:scale-95 text-center font-semibold"
              >
                Get Started
              </Link>
              <Link
                to="/calculator"
                className="w-full sm:w-auto rounded-[4px] text-white text-[16px] px-[30px] py-[12px] bg-gsps-blue hover:bg-gsps-blue/90 transition-all shadow-lg hover:shadow-xl active:scale-95 text-center font-semibold"
              >
                Calculate Your Savings
              </Link>
            </div>
          </div>

          {/* Right Column: Phone Mockup */}
          <div className="mt-12 lg:mt-0 lg:col-span-6 relative">
            <div className="relative mx-auto w-full max-w-[300px] sm:max-w-md lg:max-w-none transform hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/banner1.png"
                alt="GSPS Mobile Application"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
