import { FeaturesList } from "@/sections/FeaturesSection/components/FeaturesList";

export const FeaturesSection = () => {
  return (
    <section className="relative text-base box-border caret-transparent flow-root leading-6 md:text-lg md:leading-[27px]">
      <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
        <div className="text-base bg-slate-50 box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
          <div className="text-base box-border caret-transparent leading-6 pl-[max(20px,50%_-_670px)] pr-[max(20px,50%_-_670px)] pb-12 md:text-lg md:leading-[27px] md:pl-[max(48px,50%_-_670px)] md:pr-[max(48px,50%_-_670px)] md:pb-20">
            <FeaturesList />
          </div>
        </div>
      </div>
    </section>
  );
};
