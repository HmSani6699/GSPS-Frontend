import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Savings Calculator", path: "/calculator" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-500 ${
      scrolled 
        ? "bg-white/80 backdrop-blur-2xl py-2 shadow-[0_10px_40px_rgba(0,0,0,0.04)]" 
        : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo2.png"
              alt="GSPS Logo"
              className="h-10 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-bold transition-all hover:text-gsps-green relative group py-2 ${
                  location.pathname === link.path ? "text-gsps-green" : "text-gsps-blue"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gsps-green transform origin-right transition-transform duration-300 scale-x-0 group-hover:scale-x-100 group-hover:origin-left ${
                  location.pathname === link.path ? "scale-x-100" : ""
                }`}></span>
              </Link>
            ))}
           
            

             <Link
                 to="/login"
                className="bg-gsps-blue text-white px-8 py-3 rounded-[8px] font-black hover:bg-opacity-90 transition-all shadow-xl shadow-gsps-blue/20 active:scale-95"
              >
                Login
              </Link>
            
            {/* <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-gray-100">
             
              <Link
                to="/signup"
                className="bg-gsps-blue text-white px-8 py-3 rounded-2xl font-black hover:bg-opacity-90 transition-all shadow-xl shadow-gsps-blue/20 active:scale-95"
              >
                Sign Up
              </Link>
            </div> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2.5 rounded-2xl transition-all duration-300 ${
                isOpen ? "bg-gsps-blue text-white" : scrolled ? "bg-gsps-bg-light text-gsps-blue" : "bg-white/10 text-gsps-blue backdrop-blur-md"
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 absolute ${isOpen ? "rotate-45" : "-translate-y-2"}`}></span>
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 absolute ${isOpen ? "opacity-0" : ""}`}></span>
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 absolute ${isOpen ? "-rotate-45" : "translate-y-2"}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden absolute w-full top-full left-0 bg-white shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
          isOpen ? "max-h-screen border-b border-gray-100" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-2 p-6 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-bold text-xl p-4 rounded-2xl transition-all active:bg-gsps-bg-light ${
                location.pathname === link.path ? "text-gsps-green bg-gsps-green/5" : "text-gsps-blue"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-gray-100 my-4"></div>
          <Link
            to="/login"
            className="text-gsps-blue font-bold text-xl p-4 rounded-2xl active:bg-gsps-bg-light"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="w-full text-center bg-gsps-blue text-white px-8 py-5 rounded-3xl font-black text-xl shadow-2xl shadow-gsps-blue/20 active:scale-95 mt-4"
          >
            Create Free Account
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
