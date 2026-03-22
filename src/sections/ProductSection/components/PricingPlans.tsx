import { useState } from "react";

const PLANS = [
  {
    id: 1,
    label: "1 Box",
    subLabel: "7 Treatments",
    price: 24.99,
    pricePerTreatment: "3.57",
    savings: null,
    popular: false,
  },
  {
    id: 2,
    label: "2 Boxes",
    subLabel: "14 Treatments",
    price: 39.99,
    pricePerTreatment: "2.86",
    savings: "Save $10",
    popular: false,
    badge: "FREE SHIPPING",
  },
  {
    id: 3,
    label: "3 Boxes",
    subLabel: "21 Treatments",
    price: 54.99,
    pricePerTreatment: "2.62",
    savings: "Save $20",
    popular: true,
    badge: "MOST POPULAR",
  },
  {
    id: 4,
    label: "4 Boxes",
    subLabel: "28 Treatments",
    price: 64.99,
    pricePerTreatment: "2.32",
    savings: "Save $35",
    popular: false,
    badge: "BEST VALUE",
  },
];

interface PricingPlansProps {
  onPlanChange?: (plan: typeof PLANS[0]) => void;
}

export const PricingPlans = ({ onPlanChange }: PricingPlansProps) => {
  const [selected, setSelected] = useState(2); // default to 3 boxes

  const handleSelect = (index: number) => {
    setSelected(index);
    onPlanChange?.(PLANS[index]);
  };

  return (
    <div className="my-5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-bold text-gray-700 uppercase tracking-wide">Select Your Supply</p>
        <span className="text-xs text-[#5B2D8E] font-semibold">Use code CHECKOUT15 for 15% off ✨</span>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {PLANS.map((plan, i) => (
          <button
            key={plan.id}
            onClick={() => handleSelect(i)}
            className={`relative text-left rounded-2xl border-2 p-3 transition-all duration-200 ${
              selected === i
                ? "border-[#5B2D8E] bg-purple-50 shadow-lg ring-2 ring-purple-200"
                : "border-gray-200 bg-white hover:border-purple-300"
            }`}
          >
            {plan.badge && (
              <span
                className={`absolute -top-2.5 left-1/2 -translate-x-1/2 text-[10px] font-black px-2.5 py-0.5 rounded-full whitespace-nowrap ${
                  plan.popular
                    ? "bg-[#5B2D8E] text-white"
                    : plan.badge === "BEST VALUE"
                    ? "bg-amber-400 text-amber-900"
                    : "bg-emerald-500 text-white"
                }`}
              >
                {plan.badge}
              </span>
            )}
            <div className="font-black text-gray-900 text-sm leading-tight">{plan.label}</div>
            <div className="text-gray-500 text-xs mt-0.5">{plan.subLabel}</div>
            <div className="mt-2 flex items-end gap-1">
              <span className="text-[#5B2D8E] font-black text-lg leading-none">${plan.price}</span>
            </div>
            <div className="text-gray-400 text-[10px] mt-0.5">${plan.pricePerTreatment}/treatment</div>
            {plan.savings && (
              <div className="mt-1.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 rounded-full px-2 py-0.5 inline-block">
                {plan.savings}
              </div>
            )}
            {selected === i && (
              <div className="absolute top-2 right-2 w-4 h-4 bg-[#5B2D8E] rounded-full flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Free shipping nudge */}
      {selected < 1 && (
        <div className="mt-3 flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
          <span className="text-base">🚚</span>
          <p className="text-xs text-amber-800 font-medium">
            Add 1 more box to unlock <strong>FREE shipping</strong> (orders $39+)!
          </p>
        </div>
      )}
      {selected >= 1 && (
        <div className="mt-3 flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2">
          <span className="text-base">✅</span>
          <p className="text-xs text-emerald-800 font-medium">
            <strong>Free shipping</strong> unlocked on this order!
          </p>
        </div>
      )}
    </div>
  );
};
