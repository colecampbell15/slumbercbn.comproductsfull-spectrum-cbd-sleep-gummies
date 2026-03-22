const FEATURES = [
  { icon: "✨", text: "Whitens visibly after just ONE use*" },
  { icon: "⏱️", text: "Only 30 minutes a day — fits your schedule" },
  { icon: "🦷", text: "Enamel-safe advanced whitening formula" },
  { icon: "💧", text: "No-slip grip strips — stay in place" },
  { icon: "🧪", text: "Removes 10+ years of stains in 7 treatments*" },
  { icon: "😌", text: "Sensitivity comfort formula — gentle on gums" },
];

export const ProductDescription = () => {
  return (
    <div className="my-4">
      <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-3">Why Dr. White Works</p>
      <div className="grid grid-cols-1 gap-2">
        {FEATURES.map((f, i) => (
          <div key={i} className="flex items-start gap-3 bg-purple-50/60 rounded-xl px-3 py-2.5">
            <span className="text-base mt-0.5 shrink-0">{f.icon}</span>
            <span className="text-sm text-gray-700 font-medium leading-snug">{f.text}</span>
          </div>
        ))}
      </div>
      <p className="text-[10px] text-gray-400 mt-2">*Results may vary. Based on clinical testing with regular use.</p>
    </div>
  );
};
