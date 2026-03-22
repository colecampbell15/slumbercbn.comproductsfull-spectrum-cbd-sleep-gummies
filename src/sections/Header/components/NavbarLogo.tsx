export const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="relative text-base box-border caret-transparent block col-end-[logo] col-start-[logo] row-end-[logo] row-start-[logo] leading-6 max-w-max min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]"
    >
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-[#5B2D8E] flex items-center justify-center shadow-md">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8 2 4 5 4 9C4 14 8 18 12 22C16 18 20 14 20 9C20 5 16 2 12 2Z" fill="white" opacity="0.9"/>
            <path d="M9 10L11 12L15 8" stroke="#5B2D8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex flex-col leading-none">
          <span className="text-[#5B2D8E] font-black text-lg tracking-tight">Dr.White<span className="text-[8px] align-super ml-0.5">™</span></span>
          <span className="text-gray-500 text-[9px] tracking-widest uppercase font-medium">Professional</span>
        </div>
      </div>
    </a>
  );
};
