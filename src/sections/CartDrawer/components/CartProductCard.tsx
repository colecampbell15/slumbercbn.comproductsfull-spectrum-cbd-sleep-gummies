export type CartProductCardProps = {
  productUrl: string;
  productName: string;
  productImage: string;
  fullStars: string;
  partialStarWidth: string;
  reviewCount: string;
  price: string;
  outerClassName: string;
};

export const CartProductCard = (props: CartProductCardProps) => {
  return (
    <div
      className={`text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px] ${props.outerClassName}`}
    >
      <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
        <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
          <div className="text-base box-border caret-transparent flex leading-6 md:text-lg md:leading-[27px] items-center bg-violet-100 w-full p-4 rounded-lg">
            <a
              href={props.productUrl}
              aria-label={props.productName}
              className="text-base box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]"
            >
              <div className="text-base box-border caret-transparent shrink-0 h-[90px] leading-6 w-[90px] overflow-hidden mr-4 rounded-bl rounded-br rounded-tl rounded-tr md:text-lg md:leading-[27px]">
                <img
                  src={props.productImage}
                  alt={props.productName}
                  className="text-transparent text-base aspect-[auto_90_/_90] box-border h-full leading-6 max-w-full object-contain w-full md:text-lg md:leading-[27px]"
                />
              </div>
            </a>
            <div className="text-base box-border caret-transparent flex leading-6 min-h-[auto] md:text-lg md:leading-[27px] basis-[0%] flex-col grow justify-start">
              <a
                href={props.productUrl}
                className="text-slate-900 text-base box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]"
              >
                <h3 className="text-neutral-900 text-[15px] font-semibold box-border caret-transparent leading-[22.5px] max-w-full text-left text-ellipsis text-nowrap overflow-hidden mb-1.5">
                  {props.productName}
                </h3>
              </a>
              <div className="text-base items-center box-border caret-transparent gap-x-2 flex leading-6 min-h-[auto] min-w-[auto] gap-y-2 mb-1 md:text-lg md:leading-[27px]">
                <span className="text-[13px] items-center box-border caret-transparent flex leading-[19.5px] min-h-[auto] min-w-[auto]">
                  ★★★★
                  <span className="relative text-black box-border caret-transparent block min-h-[auto] min-w-[auto] w-[13px] overflow-hidden">
                    <span
                      className={`absolute box-border caret-transparent block overflow-hidden left-0 top-0 w-[${props.partialStarWidth}]`}
                    >
                      ★
                    </span>
                    <span className="box-border caret-transparent">☆</span>
                  </span>
                </span>
                <span className="text-neutral-600 text-[13px] box-border caret-transparent block leading-[19.5px] min-h-[auto] min-w-[auto]">
                  ({props.reviewCount} reviews)
                </span>
              </div>
              <div className="text-base items-baseline box-border caret-transparent gap-x-2 flex leading-[20.8px] min-h-[auto] min-w-[auto] gap-y-2 mb-2 md:text-lg md:leading-[23.4px]">
                <span className="text-slate-900 text-[15px] box-border caret-transparent block leading-[19.5px] min-h-[auto] min-w-[auto]">
                  {props.price}
                </span>
              </div>
              <div className="text-base items-stretch box-border caret-transparent gap-x-2 flex leading-6 min-h-[auto] min-w-[auto] gap-y-2 md:text-lg md:leading-[27px]">
                <button
                  type="button"
                  className="text-white text-base font-semibold items-center bg-indigo-800 caret-transparent flex basis-[0%] grow h-[34px] justify-center leading-6 min-h-[auto] min-w-[auto] w-full p-2 rounded-[40px] md:text-lg md:leading-[27px]"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
