import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gsps-bg-light lg:pt-[10px] lg:pb-[20px]">
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(186,230,253,0.4),transparent_50%)] -z-10" />

      {/* Abstract Cloud Shapes */}
      <div className="absolute top-20 right-[20%] w-32 h-16 bg-white/40 rounded-full blur-xl -z-10" />
      <div className="absolute top-40 right-[10%] w-48 h-20 bg-white/30 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-20 right-[30%] w-64 h-24 bg-white/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-[14px] md:text-[20px] lg:text-[45px] tracking-tight font-extrabold text-gsps-blue sm:text-5xl md:text-6xl leading-[1.5]">
              Pay Your Tuition Globally — <br className="hidden lg:block" />
              Save More as a Student
            </h1>
            <p className="mt-6 text-lg text-gray-500 sm:text-[16px] max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Send tuition payments worldwide with lower fees, better exchange
              rates, and flexible payment options designed for students.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <Link
                to="/signup"
                className="rounded-[4px] text-white text-[16px] px-[30px] py-[10px] bg-gsps-green hover:bg-gsps-green/90 transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                Get Started
              </Link>
              <Link
                to="/calculator"
                className=" rounded-[4px] text-white  text-[16px] px-[30px] py-[10px]   bg-gsps-blue hover:bg-gsps-blue/90 transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                Calculate Your Savings
              </Link>
            </div>
          </div>

          {/* Right Column: Phone Mockup */}
          <div className="mt-12 relative  sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full h-full rounded-3xl   transform hover:scale-[1.02] transition-transform duration-500 ">
              <img
                src="/banner1.png"
                alt="GSPS Mobile Application"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Soft shadow/glow behind the phone */}
            {/* <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-gsps-blue/10 to-transparent blur-2xl rounded-full" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
