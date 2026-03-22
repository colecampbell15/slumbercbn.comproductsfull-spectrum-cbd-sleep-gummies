export const SocialProofBar = () => {
  return (
    <section className="bg-white border-y border-gray-100 py-8">
      <div className="mx-[max(20px,50%_-_670px)] md:mx-[max(48px,50%_-_670px)]">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {[
            { stat: "50,000+", label: "Happy Customers", icon: "😁" },
            { stat: "4.8/5", label: "Average Rating", icon: "⭐" },
            { stat: "10 Shades", label: "Whiter in 7 Days", icon: "✨" },
            { stat: "30-Day", label: "Money-Back Guarantee", icon: "🛡️" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center py-4 px-3 rounded-2xl bg-purple-50/60 border border-purple-100">
              <span className="text-3xl mb-2">{item.icon}</span>
              <p className="text-[#5B2D8E] font-black text-xl leading-tight">{item.stat}</p>
              <p className="text-gray-600 text-xs mt-1 leading-tight font-medium">{item.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {["As Seen On", "Forbes", "Vogue", "The Today Show", "Allure", "Good Morning America"].map((b, i) => (
            i === 0
              ? <span key={i} className="text-gray-400 text-xs font-semibold uppercase tracking-widest">{b}</span>
              : <span key={i} className="text-gray-400 font-black text-sm md:text-base tracking-tight opacity-60">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
