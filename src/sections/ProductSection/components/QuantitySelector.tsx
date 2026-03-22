export const QuantitySelector = () => {
  return (
    <div className="text-base box-border caret-transparent inline-block leading-6 w-[101px] mt-6 md:text-lg md:leading-[27px]">
      <div className="relative text-base box-border caret-transparent leading-6 w-full md:text-lg md:leading-[27px]">
        <label className="text-zinc-900/70 text-base box-border caret-transparent hidden leading-6 w-fit mb-2 md:text-lg md:leading-[27px]">
          Quantity:
        </label>
        <div className="text-zinc-900 text-base items-center box-border caret-transparent flex h-14 justify-center leading-6 w-full border border-zinc-900/10 rounded-[60px] border-solid md:text-lg md:leading-[27px]">
          <button
            type="button"
            aria-label="Decrease quantity"
            className="text-base bg-transparent caret-transparent block leading-6 min-h-[auto] min-w-[auto] p-0 md:text-lg md:leading-[27px]"
          >
            <img
              src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-37.svg"
              alt="Icon"
              className="text-base box-border caret-transparent h-0.5 leading-6 w-2.5 md:text-lg md:leading-[27px]"
            />
          </button>
          <input
            type="text"
            name="quantity"
            value="1"
            className="appearance-none text-base bg-transparent box-border caret-transparent block leading-6 min-h-[auto] min-w-6 text-center p-0 md:text-lg md:leading-[27px]"
          />
          <button
            type="button"
            aria-label="Increase quantity"
            className="text-base bg-transparent caret-transparent block leading-6 min-h-[auto] min-w-[auto] p-0 md:text-lg md:leading-[27px]"
          >
            <img
              src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-38.svg"
              alt="Icon"
              className="text-base box-border caret-transparent h-2.5 leading-6 w-2.5 md:text-lg md:leading-[27px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
