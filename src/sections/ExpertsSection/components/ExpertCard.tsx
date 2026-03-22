export type ExpertCardProps = {
  imageSrc: string;
  name: string;
  title: string;
  description: string;
};

export const ExpertCard = (props: ExpertCardProps) => {
  return (
    <div className="text-base bg-violet-50 box-border caret-transparent flex flex-wrap leading-6 w-full p-5 rounded-[10px] md:text-lg md:leading-[27px]">
      <div className="relative text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] w-full overflow-hidden mb-5 mx-auto pb-[100%] rounded-xl md:text-lg md:leading-[27px] md:w-80 md:pb-[80%]">
        <img
          src={props.imageSrc}
          alt="Avater Image"
          className="absolute text-transparent text-base box-border h-full leading-6 max-w-full object-cover w-full md:text-lg md:leading-[27px]"
        />
      </div>
      <div className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] w-full pb-[30px] md:text-lg md:leading-[27px]">
        <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
          <h3 className="text-neutral-900 text-2xl box-border caret-transparent leading-[31.2px] mb-[5px] md:text-3xl md:leading-[39px]">
            {props.name}
          </h3>
          <p className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
            <span className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
              {props.title}
            </span>
          </p>
          <div className="text-base box-border caret-transparent gap-x-2 grid leading-6 gap-y-2 md:text-lg md:gap-x-2.5 md:leading-[27px] md:gap-y-2.5">
            <p className="text-zinc-900/70 text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]"></p>
            <p className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
              {props.description}
            </p>
            <p className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
