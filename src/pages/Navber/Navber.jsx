import { Link } from "react-router-dom";

const Navber = () => {
  return (
    <nav className="sticky top-0 z-50 w-full navber_gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo2.png"
              alt="GSPS Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-gsps-blue font-medium hover:text-gsps-green transition-colors"
            >
              About
            </Link>
            <Link
              to="/how-it-works"
              className="text-gsps-blue font-medium hover:text-gsps-green transition-colors"
            >
              How It Works
            </Link>
            <Link
              to="/calculator"
              className="text-gsps-blue font-medium hover:text-gsps-green transition-colors"
            >
              Savings Calculator
            </Link>
            <Link
              to="/support"
              className="text-gsps-blue font-medium hover:text-gsps-green transition-colors"
            >
              Support
            </Link>

             <Link
              to="/signup"
              className="bg-gsps-green text-white px-8 py-2.5 rounded-lg font-semibold hover:bg-gsps-green/90 transition-all shadow-md active:scale-95"
            >
              Sign Up
            </Link>
          </div>

        
        </div>
      </div>
    </nav>
  );
};

export default Navber;
