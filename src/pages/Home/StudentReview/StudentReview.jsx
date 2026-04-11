const StudentReview = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gsps-bg-light/40 border border-gsps-blue/5 rounded-2xl p-8 md:p-12 text-center shadow-sm">
          <blockquote className="text-xl md:text-2xl font-medium text-gsps-blue italic leading-relaxed">
            "This service made paying my tuition so much easier and cheaper?"
          </blockquote>
          <div className="mt-6 flex flex-col items-center">
            <div className="h-px w-12 bg-gray-300 mb-4" />
            <p className="text-gray-500 font-medium tracking-wide">
              — International Student —
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentReview;
