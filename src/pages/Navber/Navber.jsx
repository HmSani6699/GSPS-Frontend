import { useState } from "react";
import { Link } from "react-router-dom";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Savings Calculator", path: "/calculator" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full navber_gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <img
              src="/logo2.png"
              alt="GSPS Logo"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gsps-blue font-medium hover:text-gsps-green transition-colors"
              >
                {link.name}
              </Link>
            ))}
           
            <Link
             to="/login"
              className="bg-gsps-green text-white px-8 py-2.5 rounded-lg font-semibold hover:bg-gsps-green/90 transition-all shadow-md active:scale-95"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gsps-blue p-2 focus:outline-none focus:ring-2 focus:ring-gsps-green/50 rounded-lg"
              aria-label="Toggle menu"
            >
              <svg
                className="h-7 w-7 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out border-b border-gray-100 ${
          isOpen ? "max-h-96 opacity-100 py-6" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-gsps-blue font-medium text-lg hover:text-gsps-green transition-colors w-full text-center py-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="text-gsps-blue font-medium text-lg hover:text-gsps-green transition-colors w-full text-center py-2"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="w-full text-center bg-gsps-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-gsps-green/90 transition-all shadow-md active:scale-95"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
