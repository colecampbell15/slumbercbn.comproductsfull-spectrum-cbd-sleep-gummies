const PRODUCT_IMG = "https://c.animaapp.com/mn211sd3lp4PsU/img/uploaded-asset-1774200567377-0.png";

export const BeforeAfterSection = () => {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="mx-[max(20px,50%_-_670px)] md:mx-[max(48px,50%_-_670px)]">
        <div className="text-center mb-12">
          <p className="text-[#5B2D8E] font-bold text-xs tracking-widest uppercase mb-2">Real Results</p>
          <h2 className="text-gray-900 text-[28px] font-black tracking-tight leading-tight md:text-[40px]">
            See the Dr.White Difference
          </h2>
          <p className="text-gray-500 text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Professional-grade results at home. Our customers consistently see up to <strong>10 shades whiter</strong> in just 7 treatments.
          </p>
        </div>

        {/* Before/After grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            { name: "Sarah M.", shade: "8 shades whiter", time: "7 treatments", variant: "Classic White", bg: "#f0eaf8", accent: "#5B2D8E" },
            { name: "James T.", shade: "10 shades whiter", time: "14 treatments", variant: "Arctic Mint", bg: "#e0f4ff", accent: "#1a7bbf" },
            { name: "Emma R.", shade: "9 shades whiter", time: "7 treatments", variant: "Rose Enamel", bg: "#fde8f0", accent: "#c0306a" },
          ].map((card, i) => (
            <div key={i} className="rounded-3xl overflow-hidden border border-gray-100 shadow-sm bg-white">
              <div className="grid grid-cols-2 h-44 md:h-52">
                <div className="flex flex-col items-center justify-center bg-gray-100 gap-2 relative">
                  <span className="absolute top-2 left-2 bg-gray-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Before</span>
                  <div className="w-16 h-16 rounded-full bg-gray-200 border-4 border-white shadow flex items-center justify-center overflow-hidden">
                    <span className="text-3xl">😶</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <div key={s} className="w-3 h-4 rounded-sm" style={{ background: s < 3 ? "#d4a96a" : "#e8d5b0" }} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 relative" style={{ background: `linear-gradient(135deg, ${card.bg} 0%, #fff 100%)` }}>
                  <span className="absolute top-2 right-2 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide text-white" style={{ background: card.accent }}>After</span>
                  <div className="w-16 h-16 rounded-full border-4 border-white shadow flex items-center justify-center overflow-hidden" style={{ background: card.bg }}>
                    <span className="text-3xl">😁</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <div key={s} className="w-3 h-4 rounded-sm" style={{ background: "#f5f0e8" }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="px-4 py-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-black text-gray-900 text-sm">{card.name}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{card.variant} · {card.time}</p>
                  </div>
                  <span className="text-xs font-black px-3 py-1.5 rounded-full text-white" style={{ background: card.accent }}>
                    {card.shade}
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-2">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="12" height="12" viewBox="0 0 20 20" fill="#facc15">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">Verified Purchase</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA under before/after */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 mb-6">
            <p className="text-amber-800 font-black text-sm">
              🎁 Welcome Offer: Use code <span className="bg-amber-200 px-2 py-0.5 rounded-lg">CHECKOUT15</span> for <span className="text-amber-700">15% off</span> your first order
            </p>
          </div>
          <br />
          <a
            href="#"
            className="inline-block text-white font-black text-base px-10 py-4 rounded-2xl shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ background: "linear-gradient(135deg, #5B2D8E 0%, #7c3aed 100%)" }}
          >
            🛒 Get My Dr.White Strips →
          </a>
          <p className="text-xs text-gray-400 mt-3">
            Free shipping on orders $39+ &nbsp;·&nbsp; 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};
