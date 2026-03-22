import { useEffect, useRef } from "react";

const items = [
  "🦷 Whitens After One Use",
  "✅ 30-Day Money Back Guarantee",
  "🚚 Free Shipping on Orders $39+",
  "🎁 Use Code CHECKOUT15 for 15% Off",
  "⭐ Over 50,000 Happy Smiles",
  "🦷 Professional-Grade Formula",
];

export const MarqueeText = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let start: number | null = null;
    let raf: number;
    const speed = 40; // px/sec

    const step = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const offset = (elapsed / 1000) * speed;
      const totalW = track.scrollWidth / 2;
      track.style.transform = `translateX(-${offset % totalW}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden w-full">
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform" style={{ display: "flex" }}>
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-x-6 text-white font-semibold text-sm md:text-base px-6">
            {item}
            <span className="inline-block w-1 h-1 bg-white/50 rounded-full" />
          </span>
        ))}
      </div>
    </div>
  );
};
