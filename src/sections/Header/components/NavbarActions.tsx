export const NavbarActions = () => {
  return (
    <div className="text-base items-center box-border caret-transparent gap-x-3 flex flex-wrap col-end-[secondary-nav] col-start-[secondary-nav] row-end-[secondary-nav] row-start-[secondary-nav] justify-end justify-self-end leading-6 min-h-[auto] min-w-[auto] gap-y-3 md:text-lg md:gap-x-6 md:leading-[27px]">
      <div className="text-base items-center box-border caret-transparent gap-x-4 flex leading-6 min-h-[auto] min-w-[auto] gap-y-4 md:text-lg md:gap-x-6 md:leading-[27px] md:gap-y-6">
        <a
          href="/a/account/login"
          className="relative text-base box-border caret-transparent hidden leading-6 min-h-0 min-w-0 md:text-lg md:block md:leading-[27px] md:min-h-[auto] md:min-w-[auto] before:accent-auto before:box-border before:caret-transparent before:text-zinc-900 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:-inset-2.5 before:font-pp_mori before:md:text-lg before:md:leading-[27px]"
        >
          <span className="text-base font-semibold box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
            Login
          </span>
        </a>
        <a
          href="/cart"
          className="relative text-base items-center bg-neutral-100 box-border caret-transparent flex h-[35px] justify-center leading-6 min-h-[auto] min-w-[auto] w-[35px] p-2 rounded-[50%] md:text-lg md:h-[52px] md:leading-[27px] md:w-[52px] md:p-0 before:accent-auto before:box-border before:caret-transparent before:text-zinc-900 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:-inset-2.5 before:font-pp_mori before:md:text-lg before:md:leading-[27px]"
        >
          <img
            src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-21.svg"
            alt="Icon"
            className="text-base box-border caret-transparent h-[21px] leading-6 align-baseline w-[21px] md:text-lg md:leading-[27px]"
          />
          <div className="absolute text-base box-border caret-transparent leading-6 top-[-5px] left-3.5 md:text-lg md:leading-[27px]">
            <div className="text-white text-[9px] font-bold items-center bg-zinc-900 box-border caret-transparent grid h-4 justify-items-center leading-[9px] min-w-min opacity-0 w-4 px-1 rounded-full">
              <span className="caret-transparent block min-h-[auto] min-w-[auto]">
                0
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
