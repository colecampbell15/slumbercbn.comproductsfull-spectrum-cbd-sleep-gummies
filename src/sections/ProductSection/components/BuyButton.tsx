const PLAN_DATA = [
  { price: "$24.99", label: "1 Box — 7 Treatments" },
  { price: "$39.99", label: "2 Boxes — 14 Treatments" },
  { price: "$54.99", label: "3 Boxes — 21 Treatments" },
  { price: "$64.99", label: "4 Boxes — 28 Treatments" },
];

interface BuyButtonProps {
  selectedPlan?: number;
}

export const BuyButton = ({ selectedPlan = 2 }: BuyButtonProps) => {
  const plan = PLAN_DATA[selectedPlan] ?? PLAN_DATA[2];
  return (
    <div className="mt-4 mb-2">
      <button
        type="button"
        className="relative w-full text-white font-black text-base tracking-wide uppercase py-4 rounded-2xl shadow-xl transition-all duration-200 active:scale-[0.98] overflow-hidden"
        style={{ background: "linear-gradient(135deg, #5B2D8E 0%, #7c3aed 100%)" }}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <span>🛒</span>
          <span>Add to Cart — {plan.price}</span>
        </span>
        <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-200" />
      </button>
      <button
        type="button"
        className="w-full mt-2 text-[#5B2D8E] font-bold text-sm py-3 rounded-2xl border-2 border-[#5B2D8E] hover:bg-purple-50 transition-colors duration-200"
      >
        Buy Now — Checkout Instantly
      </button>
      <p className="text-center text-[10px] text-gray-400 mt-2">
        🔒 Secure &amp; Encrypted Checkout &nbsp;|&nbsp; 256-bit SSL
      </p>
    </div>
  );
};
