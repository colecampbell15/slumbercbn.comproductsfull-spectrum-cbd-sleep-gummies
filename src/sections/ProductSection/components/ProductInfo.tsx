import { useState } from "react";
import { ProductRating } from "@/sections/ProductSection/components/ProductRating";
import { ProductDescription } from "@/sections/ProductSection/components/ProductDescription";
import { PricingPlans } from "@/sections/ProductSection/components/PricingPlans";
import { BuyButton } from "@/sections/ProductSection/components/BuyButton";
import { MoneyBackGuarantee } from "@/sections/ProductSection/components/MoneyBackGuarantee";
import { VARIANT_COLORS } from "@/sections/ProductSection/components/MediaCarousel";

const VARIANT_PRICES = [24.99, 39.99, 54.99, 64.99];

interface ProductInfoProps {
  selectedVariant?: number;
  onVariantChange?: (index: number) => void;
}

export const ProductInfo = ({ selectedVariant = 0, onVariantChange }: ProductInfoProps) => {
  const [selectedPlan, setSelectedPlan] = useState(2);

  const planPrices = [24.99, 39.99, 54.99, 64.99];

  return (
    <div className="static text-base box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] z-auto top-auto md:sticky md:text-lg md:leading-[27px] md:z-[1] md:top-[180px]">
      {/* Brand + Badge */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[#5B2D8E] text-xs font-black tracking-widest uppercase">Dr.White™</span>
        <span className="bg-[#5B2D8E] text-white text-[10px] font-black px-2.5 py-1 rounded-full tracking-widest">#1 BEST SELLER</span>
      </div>

      <h1 className="text-gray-900 text-[26px] font-black tracking-tight leading-tight mb-2 md:text-[34px]">
        Professional Whitening Strips
      </h1>
      <p className="text-gray-500 text-sm leading-relaxed mb-3">
        Get a visibly brighter smile in just <strong>30 minutes a day</strong>. Professional-grade formula trusted by dentists worldwide.
      </p>

      <ProductRating />

      {/* Color Variant Picker */}
      <div className="mt-4 mb-2">
        <p className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
          Variant: <span className="text-[#5B2D8E] normal-case font-black">{VARIANT_COLORS[selectedVariant].label}</span>
        </p>
        <div className="flex gap-2">
          {VARIANT_COLORS.map((v, i) => (
            <button
              key={i}
              onClick={() => onVariantChange?.(i)}
              title={v.label}
              className={`w-8 h-8 rounded-full border-2 transition-all duration-200 shadow-sm ${selectedVariant === i ? "border-[#5B2D8E] scale-110 ring-2 ring-purple-200" : "border-gray-200 hover:border-purple-300"}`}
              style={{ background: v.accent }}
            />
          ))}
        </div>
      </div>

      {/* Promo Code Banner */}
      <div className="mt-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-2xl px-4 py-3 flex items-center gap-3">
        <span className="text-2xl">🎁</span>
        <div>
          <p className="text-xs font-semibold opacity-90">Welcome Offer — First Order Only</p>
          <p className="font-black text-sm mt-0.5">Use code <span className="bg-white/20 px-2 py-0.5 rounded-lg tracking-widest">CHECKOUT15</span> for <span className="text-yellow-300">15% OFF</span></p>
        </div>
      </div>

      <ProductDescription />

      <PricingPlans onPlanChange={(plan) => setSelectedPlan(plan.id - 1)} />

      <BuyButton selectedPlan={selectedPlan} />

      <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-2 mb-1">
        <span>🚚</span>
        <span>Ships in 1–2 Business Days &nbsp;|&nbsp; Free on Orders $39+</span>
      </div>

      <MoneyBackGuarantee />

      {/* Trust icons row */}
      <div className="mt-4 grid grid-cols-4 gap-2 text-center">
        {[
          { icon: "🔒", label: "Secure\nCheckout" },
          { icon: "🦷", label: "Enamel\nSafe" },
          { icon: "✅", label: "Peroxide\nFree Option" },
          { icon: "♻️", label: "Cruelty\nFree" },
        ].map((t, i) => (
          <div key={i} className="flex flex-col items-center bg-gray-50 rounded-xl p-2 border border-gray-100">
            <span className="text-lg">{t.icon}</span>
            <span className="text-[10px] font-semibold text-gray-500 mt-1 leading-tight whitespace-pre-line">{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
