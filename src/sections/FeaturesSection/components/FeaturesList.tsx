const FAQS = [
  {
    q: "How does Dr. White Whitening Strips work?",
    a: "Dr. White strips use our proprietary AdvancedWhite™ gel that bonds to your tooth enamel and breaks down deep stains with our patented no-slip grip technology. Just apply for 30 minutes and reveal visibly brighter teeth."
  },
  {
    q: "How many treatments until I see results?",
    a: "Most users see a visible difference after their very first treatment. Full results — up to 10 shades whiter — are typically achieved within 7 treatments (one full box)."
  },
  {
    q: "Is it safe for sensitive teeth?",
    a: "Yes! Dr. White is formulated with our SensitivityShield™ technology, making it gentle on enamel and gums. It is peroxide-free and safe for daily use."
  },
  {
    q: "How often should I use the strips?",
    a: "Use once daily for 30 minutes. Each box contains 7 treatments — a full week&#39;s supply. For best results, use consistently and avoid staining foods during treatment."
  },
  {
    q: "What are the 4 color variants?",
    a: "Each variant delivers the same professional whitening results. The variants (Classic White, Arctic Mint, Charcoal Ice, Rose Enamel) differ in their fresh-breath flavor infusion and the color of the packaging."
  },
];

export const FeaturesList = () => {
  return (
    <div className="py-12 md:py-20">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 items-start">
        {/* Left: Brand story */}
        <div>
          <p className="text-[#5B2D8E] font-bold text-xs tracking-widest uppercase mb-2">Professional. Proven. Powerful.</p>
          <h2 className="text-gray-900 text-3xl font-black tracking-tight leading-tight mb-5 md:text-4xl">
            The Whitening Strips Dentists Trust
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-4">
            Dr. White was created by dental professionals who were tired of expensive in-office treatments and ineffective over-the-counter strips. We developed a professional-grade formula that delivers real results — at home, in 30 minutes a day.
          </p>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Our AdvancedWhite™ gel penetrates deep into enamel to break down years of staining from coffee, wine, and tobacco — all without compromising the health of your teeth.
          </p>
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { stat: "10x", label: "More Effective Than Leading Brands" },
              { stat: "30min", label: "Daily Application Time" },
              { stat: "50K+", label: "Happy Customers" },
            ].map((s, i) => (
              <div key={i} className="bg-purple-50 rounded-2xl p-4 text-center border border-purple-100">
                <p className="text-[#5B2D8E] font-black text-2xl leading-tight">{s.stat}</p>
                <p className="text-gray-600 text-xs mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
          {/* Trust badges */}
          <div className="flex gap-3">
            {["30-Day Guarantee", "Enamel Safe", "Dentist Approved"].map((b, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm">
                <span className="text-[#5B2D8E]">✓</span> {b}
              </div>
            ))}
          </div>
        </div>

        {/* Right: FAQ accordion */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 bg-gray-50">
            <h3 className="font-black text-gray-900 text-lg">Frequently Asked Questions</h3>
          </div>
          {FAQS.map((faq, i) => (
            <details key={i} className="border-b border-gray-100 last:border-0 group">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-800 text-sm pr-4">{faq.q}</span>
                <span className="shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-[#5B2D8E] font-black text-xs">+</span>
              </summary>
              <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};
