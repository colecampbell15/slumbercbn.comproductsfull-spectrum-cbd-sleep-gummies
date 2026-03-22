export type TestimonialCardProps = {
  ariaLabel: string;
  containerClassName: string;
  imageSrc?: string;
  imageAlt?: string;
  showStars?: boolean;
  blockquoteClassName: string;
  quote: string;
  author: string;
  authorClassName: string;
  activeButtonClassName: string;
};

export const TestimonialCard = (props: TestimonialCardProps) => {
  return (
    <div
      role="group"
      aria-label={props.ariaLabel}
      className={`text-base box-border caret-transparent gap-x-8 grid col-start-[-1] row-start-1 justify-items-center leading-6 min-h-[auto] min-w-[auto] gap-y-8 snap-center snap-always md:text-lg md:gap-x-10 md:leading-[27px] md:gap-y-10 ${props.containerClassName}`}
    >
      <div className="text-base items-center box-border caret-transparent flex flex-wrap leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
        <div className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] w-[250px] mr-0 md:text-lg md:leading-[27px] md:w-auto md:mr-[90px]">
          <div className="text-base box-border caret-transparent gap-x-2 grid leading-6 gap-y-2 md:text-lg md:leading-[27px]">
            <div className="relative text-base items-center box-border caret-transparent flex justify-center leading-6 min-h-[auto] min-w-[auto] w-[340px] overflow-hidden mb-5 pb-[96%] rounded-xl md:text-lg md:leading-[27px] md:w-[480px] md:mb-0 md:rounded-r-none">
              {props.imageSrc && (
                <img
                  src={props.imageSrc}
                  alt={props.imageAlt ?? ""}
                  sizes="350px"
                  className="absolute text-transparent text-base aspect-[auto_670_/_644] box-border h-full leading-6 max-w-full object-cover w-full left-0 top-0 md:text-lg md:leading-[27px]"
                />
              )}
            </div>
          </div>
        </div>
        <div className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] w-full md:text-lg md:leading-[27px] md:w-[calc(100%_-_570px)]">
          <div className="text-base items-center box-border caret-transparent gap-x-1.5 flex leading-6 gap-y-1.5 mb-5 md:text-lg md:leading-[27px]">
            {props.showStars && (
              <div
                role="img"
                aria-label="5 out of 5 stars"
                className="text-base box-border caret-transparent contents leading-6 md:text-lg md:leading-[27px]"
              >
                <img
                  src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-42.svg"
                  alt="Icon"
                  className="relative text-amber-300 text-base box-border caret-transparent h-[15px] leading-6 w-[15px] -top-px md:text-lg md:h-5 md:leading-[27px] md:w-5"
                />
                <img
                  src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-42.svg"
                  alt="Icon"
                  className="relative text-amber-300 text-base box-border caret-transparent h-[15px] leading-6 w-[15px] -top-px md:text-lg md:h-5 md:leading-[27px] md:w-5"
                />
                <img
                  src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-42.svg"
                  alt="Icon"
                  className="relative text-amber-300 text-base box-border caret-transparent h-[15px] leading-6 w-[15px] -top-px md:text-lg md:h-5 md:leading-[27px] md:w-5"
                />
                <img
                  src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-42.svg"
                  alt="Icon"
                  className="relative text-amber-300 text-base box-border caret-transparent h-[15px] leading-6 w-[15px] -top-px md:text-lg md:h-5 md:leading-[27px] md:w-5"
                />
                <img
                  src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-42.svg"
                  alt="Icon"
                  className="relative text-amber-300 text-base box-border caret-transparent h-[15px] leading-6 w-[15px] -top-px md:text-lg md:h-5 md:leading-[27px] md:w-5"
                />
              </div>
            )}
          </div>
          <blockquote
            className={`relative text-neutral-900 text-xl box-border caret-transparent tracking-[-0.4px] leading-[26px] text-left md:text-[32px] md:tracking-[-0.64px] md:leading-[41.6px] ${props.blockquoteClassName}`}
          >
            <span className="text-white text-xl box-border caret-transparent tracking-[-0.4px] leading-[26px] md:text-[32px] md:tracking-[-0.64px] md:leading-[41.6px]">
              {props.quote}
            </span>
          </blockquote>
          <p
            className={`relative text-lg font-semibold box-border caret-transparent leading-[27px] text-left my-[30px] pl-[22px] ${props.authorClassName}`}
          >
            {props.author}
          </p>
          <div className="text-base items-center box-border caret-transparent gap-x-5 grid grid-flow-col grid-rows-[auto] justify-start leading-6 gap-y-5 md:text-lg md:leading-[27px]">
            <div className="text-base box-border caret-transparent gap-x-4 flex flex-wrap justify-center leading-6 min-h-[auto] min-w-[auto] gap-y-2.5 md:text-lg md:leading-[27px]">
              <button
                type="button"
                className={`${props.activeButtonClassName} before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:-inset-2.5 before:font-pp_mori before:md:text-lg before:md:leading-[27px]`}
              ></button>
              <button
                type="button"
                className={`relative text-base bg-white caret-transparent block h-1.5 leading-6 min-h-[auto] min-w-[auto] opacity-30 w-1.5 p-0 rounded-full md:text-lg md:leading-[27px] before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:-inset-2.5 before:font-pp_mori before:md:text-lg before:md:leading-[27px]`}
              ></button>
              <button
                type="button"
                className={`relative text-base bg-white caret-transparent block h-1.5 leading-6 min-h-[auto] min-w-[auto] opacity-30 w-1.5 p-0 rounded-full md:text-lg md:leading-[27px] before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:-inset-2.5 before:font-pp_mori before:md:text-lg before:md:leading-[27px]`}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
