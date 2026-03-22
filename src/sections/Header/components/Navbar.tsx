import { NavbarMenu } from "@/sections/Header/components/NavbarMenu";
import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { NavbarActions } from "@/sections/Header/components/NavbarActions";

export const Navbar = () => {
  return (
    <div className="text-base box-border caret-transparent block leading-6 mx-auto md:text-lg md:leading-[27px]">
      <div className="text-zinc-900 text-base items-center backdrop-blur-md bg-white shadow-sm box-border caret-transparent gap-x-3 grid [grid-template-areas:'main-nav_logo_secondary-nav'] grid-cols-[minmax(0px,1fr)_auto_minmax(0px,1fr)] grid-rows-[auto] leading-6 min-h-[63px] pl-[max(20px,50%_-_670px)] pr-[max(20px,50%_-_670px)] gap-y-3 py-2.5 md:text-lg md:bg-white md:gap-x-6 md:[grid-template-areas:'logo_main-nav_secondary-nav'] md:grid-cols-[minmax(0px,1fr)_fit-content(70%)_minmax(0px,1fr)] md:leading-[27px] md:min-h-0 md:pl-[max(48px,50%_-_670px)] md:pr-[max(48px,50%_-_670px)] md:gap-y-6 md:py-[27px]">
        <NavbarMenu />
        <NavbarLogo />
        <NavbarActions />
      </div>
    </div>
  );
};
