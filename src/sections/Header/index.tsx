import { Navbar } from "@/sections/Header/components/Navbar";

export const Header = () => {
  return (
    <header className="sticky text-base box-border caret-transparent leading-6 z-10 top-11 md:text-lg md:leading-[27px] md:top-[54px]">
      <div className="text-base box-border caret-transparent block leading-6 md:text-lg md:leading-[27px]">
        <Navbar />
      </div>
    </header>
  );
};
