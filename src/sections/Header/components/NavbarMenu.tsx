export const NavbarMenu = () => {
  return (
    <div className="text-base box-border caret-transparent col-end-[main-nav] col-start-[main-nav] row-end-[main-nav] row-start-[main-nav] leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
      <div className="text-base items-center box-border caret-transparent gap-x-4 flex leading-6 gap-y-4 md:text-lg md:gap-x-6 md:leading-[27px] md:gap-y-6">
        <button
          type="button"
          className="relative text-base bg-transparent caret-transparent block leading-6 min-h-[auto] min-w-[auto] p-0 md:text-lg md:hidden md:leading-[27px] md:min-h-0 md:min-w-0 before:accent-auto before:box-border before:caret-transparent before:text-zinc-900 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:-inset-2.5 before:font-pp_mori before:md:text-lg before:md:leading-[27px]"
        >
          <img
            src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-9.svg"
            alt="Icon"
            className="text-base box-border caret-transparent h-[22px] leading-6 w-[22px] md:text-lg md:leading-[27px]"
          />
        </button>
        <a
          href="/search"
          className="relative text-base box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] md:text-lg md:hidden md:leading-[27px] md:min-h-0 md:min-w-0 before:accent-auto before:box-border before:caret-transparent before:text-zinc-900 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:-inset-2.5 before:font-pp_mori before:md:text-lg before:md:leading-[27px]"
        >
          <img
            src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-10.svg"
            alt="Icon"
            className="text-base box-border caret-transparent h-[22px] leading-6 w-[22px] md:text-lg md:leading-[27px]"
          />
        </a>
        <nav
          role="navigation"
          className="text-base items-center box-border caret-transparent gap-x-[normal] hidden flex-wrap leading-6 min-h-0 min-w-0 gap-y-[normal] md:text-lg md:gap-x-6 md:flex md:leading-[27px] md:min-h-[auto] md:min-w-[auto] md:gap-y-4"
        >
          <ul
            role="list"
            className="text-base box-border caret-transparent contents leading-6 list-none pl-0 md:text-lg md:leading-[27px]"
          >
            <li className="text-[15px] box-border caret-transparent leading-[22.5px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <a href="#" className="font-semibold box-border caret-transparent uppercase hover:text-[#5B2D8E] transition-colors">
                Shop All
              </a>
            </li>
            <li className="text-[15px] box-border caret-transparent leading-[22.5px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <a href="#" className="font-semibold box-border caret-transparent uppercase hover:text-[#5B2D8E] transition-colors">
                Bundles
              </a>
            </li>
            <li className="text-[15px] box-border caret-transparent leading-[22.5px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <a href="#" className="font-semibold box-border caret-transparent uppercase hover:text-[#5B2D8E] transition-colors">
                Results
              </a>
            </li>
            <li className="text-[15px] box-border caret-transparent leading-[22.5px] min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
              <a href="#" className="font-semibold box-border caret-transparent uppercase hover:text-[#5B2D8E] transition-colors">
                Reviews
              </a>
            </li>
          </ul>
          <div className="text-base box-border caret-transparent leading-6 min-h-0 min-w-0 md:text-lg md:leading-[27px] md:min-h-[auto] md:min-w-[auto]">
            <a
              href="#"
              className="relative text-white text-xs font-black box-border caret-transparent inline-block leading-[19.2px] text-center px-5 py-2.5 rounded-[60px] md:text-sm md:leading-[22.4px] md:px-5 md:py-2.5 animate-pulse-ring"
              style={{ background: "linear-gradient(135deg, #5B2D8E 0%, #7c3aed 100%)" }}
            >
              Shop Now →
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
