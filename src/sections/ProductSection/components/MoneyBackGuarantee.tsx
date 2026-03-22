export const MoneyBackGuarantee = () => {
  return (
    <div className="mt-4 flex items-center gap-3 bg-white border-2 border-purple-100 rounded-2xl px-4 py-3 shadow-sm">
      <div className="shrink-0 w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center border-2 border-[#5B2D8E]">
        <span className="text-2xl">🛡️</span>
      </div>
      <div>
        <p className="font-black text-gray-900 text-sm leading-tight">30-Day Money Back Guarantee</p>
        <p className="text-xs text-gray-500 mt-0.5 leading-snug">
          Not happy? We&#39;ll refund you — no questions asked.
        </p>
      </div>
    </div>
  );
};
