export const FooterBrand = () => {
  return (
    <div className="text-base box-border caret-transparent gap-x-3.5 grid basis-auto col-start-[span_2] leading-6 min-h-[auto] min-w-[auto] gap-y-3.5 md:text-lg md:gap-x-6 md:basis-3/12 md:leading-[27px] md:gap-y-6">
      <a href="/" className="text-base box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8 2 4 5 4 9C4 14 8 18 12 22C16 18 20 14 20 9C20 5 16 2 12 2Z" fill="white" opacity="0.9"/>
              <path d="M9 10L11 12L15 8" stroke="#5B2D8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-black text-xl tracking-tight">Dr.White<span className="text-[9px] align-super ml-0.5">™</span></span>
            <span className="text-white/50 text-[9px] tracking-widest uppercase font-medium">Professional</span>
          </div>
        </div>
      </a>
      <p className="text-white/70 text-sm leading-relaxed max-w-xs">
        Dr. White Professional Whitening Strips — trusted by 50,000+ customers worldwide. Professional-grade results from the comfort of your home.
      </p>
      <div className="flex gap-2 flex-wrap">
        {["FDA Listed", "Enamel Safe", "Dentist Developed"].map((b, i) => (
          <span key={i} className="text-white/80 text-[10px] font-semibold border border-white/20 rounded-full px-3 py-1">
            ✓ {b}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-2">
        {["Facebook", "Instagram", "TikTok"].map((s, i) => (
          <a key={i} href="#" aria-label={`Dr.White on ${s}`} className="text-white/50 hover:text-white transition-colors text-xs font-semibold">
            {s}
          </a>
        ))}
      </div>
    </div>
  );
};
