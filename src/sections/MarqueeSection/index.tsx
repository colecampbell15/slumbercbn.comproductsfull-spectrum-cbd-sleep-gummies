export const MarqueeSection = () => {
  const items = ["Whiter Smile", "Professional Grade", "30 Min/Day", "Enamel Safe", "50K+ Smiles", "Dentist Approved", "No Sensitivity", "Results Guaranteed"];
  return (
    <section
      className="relative text-base box-border caret-transparent flow-root leading-6 md:text-lg md:leading-[27px] py-7 overflow-hidden"
      style={{ background: "linear-gradient(90deg, #3b1a6b 0%, #5B2D8E 50%, #7c3aed 100%)" }}
    >
      <div className="flex overflow-x-hidden">
        <div className="flex animate-[marquee_22s_linear_infinite] whitespace-nowrap shrink-0 gap-10 items-center">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="flex items-center gap-4 text-white font-black text-2xl md:text-4xl tracking-tight" style={{ opacity: 0.18 }}>
              {t}
              <span className="inline-block w-2 h-2 rounded-full bg-white/60 shrink-0" />
            </span>
          ))}
        </div>
        <div className="flex animate-[marquee_22s_linear_infinite] whitespace-nowrap shrink-0 gap-10 items-center" aria-hidden>
          {[...items, ...items].map((t, i) => (
            <span key={i} className="flex items-center gap-4 text-white font-black text-2xl md:text-4xl tracking-tight" style={{ opacity: 0.18 }}>
              {t}
              <span className="inline-block w-2 h-2 rounded-full bg-white/60 shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
