import { useState } from "react";

const PRODUCT_IMG = "https://c.animaapp.com/mn211sd3lp4PsU/img/uploaded-asset-1774200567377-0.png";

const VARIANT_COLORS = [
  { name: "Classic White", hex: "#f0eaf8", accent: "#5B2D8E", label: "Classic White" },
  { name: "Arctic Mint", hex: "#e0f4ff", accent: "#1a7bbf", label: "Arctic Mint" },
  { name: "Charcoal Ice", hex: "#e8e8e8", accent: "#2c2c2c", label: "Charcoal Ice" },
  { name: "Rose Enamel", hex: "#fde8f0", accent: "#c0306a", label: "Rose Enamel" },
];

interface MediaCarouselProps {
  onVariantChange?: (index: number) => void;
  selectedVariant?: number;
}

export const MediaCarousel = ({ onVariantChange, selectedVariant = 0 }: MediaCarouselProps) => {
  const [active, setActive] = useState(0);

  const variant = VARIANT_COLORS[selectedVariant];

  return (
    <div className="w-full">
      {/* Main Image */}
      <div
        className="relative w-full rounded-2xl overflow-hidden flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${variant.hex} 0%, #fff 100%)`, minHeight: 380 }}
      >
        {/* Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-[#5B2D8E] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg tracking-wide">
            #1 DENTIST RECOMMENDED
          </span>
        </div>
        {/* 30-min badge */}
        <div className="absolute top-4 right-4 z-10 bg-white rounded-full shadow-lg w-16 h-16 flex flex-col items-center justify-center border-2 border-[#5B2D8E]">
          <span className="text-[#5B2D8E] font-black text-xl leading-none">30</span>
          <span className="text-[#5B2D8E] text-[8px] font-bold leading-none mt-0.5">MIN/DAY</span>
        </div>
        <img
          src={PRODUCT_IMG}
          alt="Dr. White Professional Whitening Strips"
          className="object-contain w-full max-w-sm mx-auto p-4 md:p-8 drop-shadow-2xl"
          style={{ maxHeight: 420 }}
        />
        {/* Shade indicator */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md">
          <span className="w-3 h-3 rounded-full" style={{ background: variant.accent }} />
          <span className="text-xs font-semibold text-gray-700">{variant.label}</span>
        </div>
      </div>

      {/* Thumbnail grid */}
      <div className="mt-3 grid grid-cols-4 gap-2">
        {VARIANT_COLORS.map((v, i) => (
          <button
            key={i}
            onClick={() => { setActive(i); onVariantChange?.(i); }}
            className={`relative rounded-xl overflow-hidden border-2 transition-all duration-200 flex items-center justify-center aspect-square ${selectedVariant === i ? "border-[#5B2D8E] shadow-md scale-105" : "border-transparent opacity-70 hover:opacity-100"}`}
            style={{ background: `linear-gradient(135deg, ${v.hex} 0%, #fff 100%)` }}
            title={v.label}
          >
            <img src={PRODUCT_IMG} alt={v.label} className="w-full h-full object-contain p-2" />
          </button>
        ))}
      </div>

      {/* Trust badges */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { icon: "🛡️", label: "30-Day\nGuarantee" },
          { icon: "🦷", label: "Enamel\nSafe" },
          { icon: "🧪", label: "ADA\nApproved" },
        ].map((b, i) => (
          <div key={i} className="flex flex-col items-center bg-gray-50 rounded-xl p-2 text-center border border-gray-100">
            <span className="text-xl">{b.icon}</span>
            <span className="text-[10px] font-semibold text-gray-600 mt-1 leading-tight whitespace-pre-line">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { VARIANT_COLORS };
