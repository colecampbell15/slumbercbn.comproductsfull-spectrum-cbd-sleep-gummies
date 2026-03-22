export const ReviewFilters = () => {
  return (
    <div className="box-border caret-transparent mt-4">
      <button
        aria-label="Toggle filters"
        className="text-[14.4px] font-medium items-center bg-transparent caret-transparent gap-x-2 flex justify-center tracking-[0.36px] leading-[14.4px] gap-y-2 text-center w-full border px-5 py-2 rounded-[14.4px] border-black/10 md:hidden"
      >
        <span className="bg-[url('https://c.animaapp.com/mn211sd3lp4PsU/assets/6d97ad80e3f8d85c0bde.svg')] bg-no-repeat box-border caret-transparent block h-4 min-h-[auto] min-w-[auto] w-4 bg-center md:min-h-0 md:min-w-0">
           
        </span>
        Filter
      </button>
      <div className="items-center box-border caret-transparent gap-x-3 grid grid-cols-[1fr] gap-y-3 mt-4 md:grid-cols-[repeat(auto-fill,minmax(190px,auto))]">
        <div className="items-center box-border caret-transparent flex h-[42px] justify-center min-h-[auto] min-w-[auto] w-full border rounded-bl rounded-br rounded-tl rounded-tr border-solid border-black/10">
          <input
            type="search"
            name="Search input"
            placeholder="Search"
            aria-label="Search reviews"
            className="appearance-none bg-transparent box-border caret-transparent block h-[42px] min-h-[auto] min-w-[auto] w-full px-4 py-2"
          />
          <button
            aria-label="Clear search input"
            className="appearance-none bg-transparent caret-transparent block h-[42px] leading-4 max-h-[42px] min-h-[auto] min-w-[auto] opacity-70 pointer-events-none p-[9px]"
          >
            <div className="bg-[url('https://widgets.juniphq.com/v1/images/6b9370310e35226af14a.svg')] bg-no-repeat box-border caret-transparent h-4 invisible w-4 bg-center">
               
            </div>
          </button>
          <button
            aria-label="Search reviews"
            className="appearance-none bg-transparent caret-transparent block h-[42px] leading-4 max-h-[42px] min-h-[auto] min-w-[auto] opacity-70 pointer-events-none p-[9px] rounded-2xl"
          >
            <div className="bg-[url('https://widgets.juniphq.com/v1/images/b949160102dad9541897.svg')] bg-no-repeat box-border caret-transparent h-4 w-4 bg-center">
               
            </div>
          </button>
        </div>
        <div className="relative items-center box-border caret-transparent flex h-[42px] leading-4 min-h-[auto] min-w-[auto] w-full border overflow-hidden pl-4 pr-3 py-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-black/10">
          <select
            aria-label="Sort by drop down"
            className="absolute appearance-none text-transparent [align-items:normal] bg-transparent box-content block h-full text-wrap w-full z-[1] left-0 top-0"
          >
            <option
              value="mostRecent"
              className="text-black items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Latest
            </option>
            <option
              value="oldest"
              className="text-black items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Oldest
            </option>
            <option
              value="highestRated"
              className="text-black items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Highest rated
            </option>
            <option
              value="lowestRated"
              className="text-black items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Lowest rated
            </option>
            <option
              value="mostHelpful"
              className="text-black items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              Most helpful
            </option>
          </select>
          <div className="items-center caret-transparent gap-x-2 flex leading-[19.2px] min-h-[auto] min-w-[auto] gap-y-2 text-ellipsis text-nowrap w-full overflow-hidden">
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] text-nowrap overflow-hidden">
              Sort by:
              <span className="box-border caret-transparent text-nowrap">
                Latest
              </span>
            </div>
            <div className="bg-[url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2710%27%20height=%277%27%20viewBox=%270%200%2010%206%27%3E%3Cpath%20fill-rule=%27evenodd%27%20d=%27M.72.47a.75.75%200%200%201%201.06%200l3.47%203.47L8.72.47a.75.75%200%200%201%201.06%201.06l-4%204a.75.75%200%200%201-1.06%200l-4-4a.75.75%200%200%201%200-1.06%27%20clip-rule=%27evenodd%27/%3E%3C/svg%3E)] bg-no-repeat bg-size-[100%] box-border caret-transparent h-1.5 min-h-[auto] min-w-2.5 text-nowrap w-2.5 bg-center ml-auto">
               
            </div>
          </div>
        </div>
        <div className="relative items-center box-border caret-transparent flex h-[42px] leading-4 min-h-[auto] min-w-[auto] w-full border overflow-hidden pl-4 pr-3 py-2.5 rounded-bl rounded-br rounded-tl rounded-tr border-solid border-black/10">
          <select
            aria-label="Rating drop down"
            className="absolute appearance-none text-transparent [align-items:normal] bg-transparent box-content block h-full text-wrap w-full z-[1] left-0 top-0"
          >
            <option
              value="all"
              className="text-black items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              All
            </option>
            <option
              value="1"
              className="text-black items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              1 star
            </option>
            <option
              value="2"
              className="text-black items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              2 stars
            </option>
            <option
              value="3"
              className="text-black items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              3 stars
            </option>
            <option
              value="4"
              className="text-black items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              4 stars
            </option>
            <option
              value="5"
              className="text-black items-center box-border caret-transparent gap-x-2 min-h-6 min-w-6 gap-y-2"
            >
              5 stars
            </option>
          </select>
          <div className="items-center caret-transparent gap-x-2 flex leading-[19.2px] min-h-[auto] min-w-[auto] gap-y-2 text-ellipsis text-nowrap w-full overflow-hidden">
            <div className="box-border caret-transparent min-h-[auto] min-w-[auto] text-nowrap overflow-hidden">
              Rating
            </div>
            <div className="bg-[url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2710%27%20height=%277%27%20viewBox=%270%200%2010%206%27%3E%3Cpath%20fill-rule=%27evenodd%27%20d=%27M.72.47a.75.75%200%200%201%201.06%200l3.47%203.47L8.72.47a.75.75%200%200%201%201.06%201.06l-4%204a.75.75%200%200%201-1.06%200l-4-4a.75.75%200%200%201%200-1.06%27%20clip-rule=%27evenodd%27/%3E%3C/svg%3E)] bg-no-repeat bg-size-[100%] box-border caret-transparent h-1.5 min-h-[auto] min-w-2.5 text-nowrap w-2.5 bg-center ml-auto">
               
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent min-h-[auto] min-w-[auto] w-full">
          <div
            role="checkbox"
            aria-label="Toggle photos & videos filter"
            className="box-border caret-transparent"
          >
            <label className="relative items-center box-border caret-transparent flex text-nowrap before:accent-auto before:bg-white before:box-border before:caret-transparent before:text-neutral-700 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-5 before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:min-h-[auto] before:min-w-[auto] before:pointer-events-auto before:text-start before:no-underline before:indent-[0px] before:normal-case before:text-nowrap before:visible before:w-5 before:border before:mr-2 before:rounded-[3px] before:border-separate before:border-solid before:border-black/10 before:font-pp_mori">
              Photos &amp; videos
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
