export type FooterColumnLink = {
  href: string;
  label: string;
};

export type FooterColumnProps = {
  title: string;
  links: FooterColumnLink[];
  extraClassName?: string;
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div
      className={`text-base box-border caret-transparent gap-x-3.5 grid shrink leading-6 max-w-[250px] min-h-[auto] min-w-[auto] gap-y-3.5 md:text-lg md:gap-x-6 md:shrink-0 md:leading-[27px] md:gap-y-6${props.extraClassName ? ` ${props.extraClassName}` : ""}`}
    >
      <p className="text-[22px] font-semibold box-border caret-transparent leading-[33px] min-h-[auto] min-w-[auto] mb-0 md:mb-5">
        {props.title}
      </p>
      <ul
        role="list"
        className="text-base box-border caret-transparent gap-x-[5px] grid leading-6 list-none min-h-[auto] min-w-[auto] gap-y-[5px] pl-0 md:text-lg md:gap-x-3 md:leading-[27px] md:gap-y-3"
      >
        {props.links.map((link, index) => (
          <li
            key={index}
            className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]"
          >
            <a
              href={link.href}
              className="text-sm box-border caret-transparent inline-block leading-[21px] md:text-base md:leading-6"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
