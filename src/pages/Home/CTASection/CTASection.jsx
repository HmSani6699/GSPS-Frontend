const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gsps-blue mb-4">
            Start Your Global Payment Journey Today
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium mb-12">
            Save money. Pay smarter. Study anywhere.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="px-10 py-4 bg-gsps-green hover:bg-gsps-green/90 text-white rounded-[4px] font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95">
              Sign Up Free
            </button>
            <button className="px-10 py-4 bg-gsps-blue hover:bg-gsps-blue/90 text-white rounded-[4px] font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95">
              Pay Tuition Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
