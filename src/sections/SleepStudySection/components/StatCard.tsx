export type StatCardProps = {
  stat: string;
  description: string;
};

export const StatCard = (props: StatCardProps) => {
  return (
    <div className="text-base content-start box-border caret-transparent gap-x-6 grid col-start-auto grid-cols-[minmax(0px,1fr)] leading-6 min-h-[auto] min-w-[auto] gap-y-6 snap-start snap-always md:text-lg md:col-start-[span_4] md:leading-[27px]">
      <div className="text-base box-border caret-transparent gap-x-4 grid leading-6 min-h-[auto] min-w-[auto] gap-y-4 text-center md:text-lg md:leading-[27px]">
        <p className="text-sky-300 text-[80px] box-border caret-transparent tracking-[-1.6px] leading-[104px] min-h-[auto] min-w-[auto] md:text-[103px] md:tracking-[-2.06px] md:leading-[133.9px]">
          <span className="relative text-[80px] box-border caret-transparent tracking-[-1.6px] leading-[104px] pl-[58px] md:text-[103px] md:tracking-[-2.06px] md:leading-[133.9px] before:accent-auto before:bg-[url('https://slumbercbn.com/cdn/shop/t/83/assets/sparkle.svg')] before:bg-no-repeat before:box-border before:caret-transparent before:text-sky-300 before:block before:text-[80px] before:not-italic before:normal-nums before:font-normal before:h-11 before:tracking-[-1.6px] before:leading-[104px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:translate-y-[-22px] before:visible before:w-11 before:z-[1] before:border-separate before:left-0 before:top-2/4 before:font-pp_mori before:md:text-[103px] before:md:tracking-[-2.06px] before:md:leading-[133.9px]">
            {props.stat}
          </span>
          %
        </p>
        <div className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
          <p className="text-xl box-border caret-transparent leading-[30px] md:text-[25px] md:leading-[37.5px]">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};
