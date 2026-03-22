export const GuaranteeSection = () => {
  return (
    <section className="relative text-base box-border caret-transparent flow-root leading-6 md:text-lg md:leading-[27px] py-8 md:py-12">
      <div className="mx-[max(20px,50%_-_670px)] md:mx-[max(48px,50%_-_670px)]">
        <div className="relative bg-gradient-to-br from-[#5B2D8E] to-[#7c3aed] rounded-[40px] overflow-hidden px-8 py-12 md:px-16 md:py-16 flex flex-col md:flex-row items-center gap-8">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          {/* Big 30 */}
          <div className="relative shrink-0 w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-white/30 bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center shadow-2xl">
            <span className="text-white font-black text-6xl md:text-7xl leading-none">30</span>
            <span className="text-white/80 text-xs font-bold tracking-widest uppercase mt-1">Day</span>
          </div>

          {/* Text */}
          <div className="text-center md:text-left relative z-10">
            <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-2">Our Promise To You</p>
            <h2 className="text-white font-black text-3xl md:text-5xl leading-tight mb-4">
              Money-Back<br/>Guarantee
            </h2>
            <p className="text-white/80 text-base leading-relaxed max-w-md">
              We stand 100% behind Dr. White. If you&#39;re not completely thrilled with your results within 30 days, contact us and we&#39;ll issue a full refund — no questions asked, no hassle.
            </p>
            <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
              {["Zero Risk", "Full Refund", "No Questions Asked"].map((b, i) => (
                <span key={i} className="bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-full backdrop-blur-sm border border-white/30">
                  ✓ {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
