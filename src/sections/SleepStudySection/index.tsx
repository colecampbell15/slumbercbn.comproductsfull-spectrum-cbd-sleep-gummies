import { StudyStats } from "@/sections/SleepStudySection/components/StudyStats";

export const SleepStudySection = () => {
  return (
    <section className="relative text-base box-border caret-transparent flow-root leading-6 md:text-lg md:leading-[27px]">
      <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
        <div className="text-base bg-slate-900 box-border caret-transparent leading-6 md:text-lg md:leading-[27px] before:accent-auto before:bg-[url('https://slumbercbn.com/cdn/shop/t/83/assets/counter-left-shape.svg')] before:bg-no-repeat before:bg-contain before:box-border before:caret-transparent before:text-neutral-700 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-60 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-20 before:z-[1] before:border-separate before:left-0 before:top-[34px] before:font-pp_mori before:md:text-lg before:md:h-[436px] before:md:leading-[27px] before:md:w-36 after:accent-auto after:bg-[url('https://slumbercbn.com/cdn/shop/t/83/assets/counter-right-shape.svg')] after:bg-no-repeat after:bg-contain after:box-border after:caret-transparent after:text-neutral-700 after:block after:text-base after:not-italic after:normal-nums after:font-normal after:h-[110px] after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-[116px] after:z-[1] after:border-separate after:right-0 after:bottom-0 after:font-pp_mori after:md:text-lg after:md:h-[293px] after:md:leading-[27px] after:md:w-[309px]">
          <div className="relative text-white text-base box-border caret-transparent leading-6 pl-[max(20px,50%_-_670px)] pr-[max(20px,50%_-_670px)] z-[2] py-[60px] md:text-lg md:leading-[27px] md:pl-[max(48px,50%_-_670px)] md:pr-[max(48px,50%_-_670px)] md:pt-[100px] md:pb-[177px]">
            <div className="text-base box-border caret-transparent gap-x-5 grid auto-cols-[minmax(0px,1fr)] leading-6 gap-y-8 md:text-lg md:gap-x-16 md:leading-[27px] md:gap-y-12">
              <div className="text-base [align-items:normal] box-border caret-transparent gap-x-4 grid grid-cols-none leading-6 min-h-[auto] min-w-[auto] gap-y-4 text-center md:text-lg md:items-end md:grid-cols-[700px] md:leading-[27px]">
                <div className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
                  <h2 className="text-[28px] box-border caret-transparent tracking-[-0.56px] leading-[33.6px] mb-3 md:text-[36.3648px] md:tracking-[-0.727296px] md:leading-[43.6378px]">
                    Deep Zzzs Gummies are Backed by Sleep Study Data
                  </h2>
                  <p className="text-lg box-border caret-transparent leading-[27px] max-w-[700px] w-full mx-auto md:text-[22px] md:leading-[33px]">
                    The results below are based on an independent 3rd party
                    study conducted with over 500 participants in partnership
                    with MoreBetter. More info is available in our{" "}
                    <a
                      href="/pages/science"
                      title="Science"
                      className="text-sky-300 text-lg bg-[linear-gradient(to_right,rgb(134,204,216),rgb(134,204,216))] bg-no-repeat bg-size-[100%_1px] box-border caret-transparent leading-[27px] bg-[position:0px_min(100%,24.3px)] md:text-[22px] md:leading-[33px] md:bg-[position:left_min(100%,29.7px)]"
                    >
                      sleep study results
                    </a>
                    .
                  </p>
                </div>
              </div>
              <StudyStats />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
