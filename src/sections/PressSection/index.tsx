import { PressCarousel } from "@/sections/PressSection/components/PressCarousel";

export const PressSection = () => {
  return (
    <section className="relative text-base box-border caret-transparent flow-root leading-6 md:text-lg md:leading-[27px]">
      <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
        <div className="text-base bg-slate-900 box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
          <div className="text-white text-base box-border caret-transparent leading-6 pl-[max(20px,50%_-_670px)] pr-[max(20px,50%_-_670px)] py-[60px] md:text-lg md:leading-[27px] md:pl-[max(48px,50%_-_670px)] md:pr-[max(48px,50%_-_670px)] md:pt-[126px] md:pb-[100px]">
            <div className="text-base box-border caret-transparent gap-x-5 grid auto-cols-[minmax(0px,1fr)] leading-6 gap-y-8 md:text-lg md:gap-x-16 md:leading-[27px] md:gap-y-12">
              <div className="text-base box-border caret-transparent gap-x-6 grid leading-6 min-h-[auto] min-w-[auto] gap-y-6 mx-auto px-5 md:text-lg md:gap-x-10 md:leading-[27px] md:gap-y-10 md:px-8">
                <PressCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
