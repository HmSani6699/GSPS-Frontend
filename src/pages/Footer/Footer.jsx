const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
          <a href="#" className="text-gsps-blue font-bold hover:text-gsps-green transition-colors">About Us</a>
          <a href="#" className="text-gsps-blue font-bold hover:text-gsps-green transition-colors">Contact</a>
          <a href="#" className="text-gsps-blue font-bold hover:text-gsps-green transition-colors">Privacy Policy</a>
          <a href="#" className="text-gsps-blue font-bold hover:text-gsps-green transition-colors">Terms + & Conditions</a>
          <a href="#" className="text-gsps-blue font-bold hover:text-gsps-green transition-colors">Support</a>
        </div>
        
        <div className="text-center pt-8 border-t border-gray-100">
          <p className="text-gray-400 text-sm font-medium">
            © {currentYear} Global Students Payment Service (GSPS)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
