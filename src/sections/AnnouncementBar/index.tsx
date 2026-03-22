import { MarqueeText } from "@/sections/AnnouncementBar/components/MarqueeText";

export const AnnouncementBar = () => {
  return (
    <aside className="sticky text-base box-border caret-transparent leading-6 z-20 top-0 md:text-lg md:leading-[27px]">
      <div className="text-base box-border caret-transparent block leading-6 md:text-lg md:leading-[27px]">
        <div
          className="text-white text-base box-border caret-transparent leading-6 py-2.5 md:text-lg md:leading-[27px] md:py-3"
          style={{ background: "linear-gradient(90deg, #3b1a6b 0%, #5B2D8E 40%, #7c3aed 70%, #5B2D8E 100%)" }}
        >
          <MarqueeText />
        </div>
      </div>
    </aside>
  );
};
