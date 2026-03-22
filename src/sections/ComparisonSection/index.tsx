import { ComparisonTable } from "@/sections/ComparisonSection/components/ComparisonTable";

export const ComparisonSection = () => {
  return (
    <section className="relative text-base box-border caret-transparent flow-root leading-6 md:text-lg md:leading-[27px]">
      <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
        <div className="text-base bg-slate-50 box-border caret-transparent leading-6 py-[50px] md:text-lg md:leading-[27px] md:pt-20 md:pb-[118px]">
          <div className="text-base box-border caret-transparent leading-6 ml-[max(20px,50%_-_670px)] mr-[max(20px,50%_-_670px)] md:text-lg md:leading-[27px] md:ml-[max(48px,50%_-_670px)] md:mr-[max(48px,50%_-_670px)]">
            <div className="relative text-base box-border caret-transparent leading-6 text-center mb-[15px] pb-[15px] md:text-lg md:leading-[27px] md:mb-20 md:pb-[30px] after:accent-auto after:bg-slate-700 after:box-border after:caret-transparent after:text-neutral-700 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-0.5 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-center after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[122px] after:z-[1] after:mx-auto after:border-separate after:bottom-0 after:inset-x-0 after:font-pp_mori after:md:text-lg after:md:leading-[27px]">
              <p className="text-[#5B2D8E] font-bold text-xs tracking-widest uppercase mb-2">See the Difference</p>
              <h2 className="text-gray-900 text-[28px] font-black tracking-tight box-border caret-transparent leading-[36.4px] md:text-[36.3648px] md:leading-[47.2742px]">
                How Dr. White Compares
              </h2>
            </div>
            <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
              <ComparisonTable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
