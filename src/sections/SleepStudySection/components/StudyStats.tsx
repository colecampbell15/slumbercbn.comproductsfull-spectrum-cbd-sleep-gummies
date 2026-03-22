import { StatCard } from "@/sections/SleepStudySection/components/StatCard";

export const StudyStats = () => {
  return (
    <div className="text-base box-border caret-transparent gap-x-5 grid grid-cols-none grid-rows-none leading-6 min-h-[auto] min-w-[auto] overflow-x-auto overflow-y-hidden overscroll-x-contain gap-y-12 -mx-5 px-5 scroll-px-5 md:text-lg md:gap-x-12 md:grid-cols-[repeat(12,minmax(0px,1fr))] md:grid-rows-[auto] md:leading-[27px] md:gap-y-16 md:mx-0 md:px-0 md:scroll-px-0">
      <StatCard
        stat="87"
        description="agree that Deep Zzzs performed better than any other sleep aid"
      />
      <StatCard
        stat="70"
        description="said Deep Zzzs resulted in better quality sleep "
      />
      <StatCard
        stat="82"
        description="agree that Deep Zzzs helped them fall asleep easier"
      />
    </div>
  );
};
