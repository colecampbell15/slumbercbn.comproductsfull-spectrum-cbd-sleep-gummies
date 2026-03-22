export type ProductCardProps = {
  productUrl: string;
  imageUrl: string;
  imageSizes?: string;
  tag: string;
  imageContainerClass: string;
  productName: string;
  ratingScore: string;
  reviewCount: number;
  ratingAriaLabel: string;
  detailedRatingAriaLabel: string;
  detailedRatingClass: string;
  price: string;
  subscriptionPrice: string;
  fromPrice: string;
  description: string;
  ratingOutOfFiveAriaLabel: string;
};

export const ProductCard = (props: ProductCardProps) => {
  const {
    productUrl,
    imageUrl,
    imageSizes = "(max-width: 699px) calc(100vw / 2 - 40px), (max-width: 1200px) calc(100vw / 3 - 64px), calc((100vw - 96px) / 3 - (24px / 3 * 2))",
    tag,
    imageContainerClass,
    productName,
    ratingScore,
    reviewCount,
    ratingAriaLabel,
    detailedRatingAriaLabel,
    detailedRatingClass,
    price,
    subscriptionPrice,
    fromPrice,
    description,
    ratingOutOfFiveAriaLabel,
  } = props;

  const reviewsUrl = `${productUrl}#shopify-product-reviews`;
  const reviewTitle = `${reviewCount} reviews`;

  return (
    <div className="relative text-neutral-900 text-base content-start bg-slate-50 box-border caret-transparent gap-x-[normal] block row-start-auto grid-cols-[minmax(0px,1fr)] grid-rows-none leading-6 min-h-[auto] min-w-[auto] gap-y-[normal] border border-slate-500/20 overflow-hidden rounded-[20px] border-solid md:text-lg md:gap-x-0 md:row-start-[span_2] md:grid-rows-subgrid md:leading-[27px] md:min-h-[570px] md:gap-y-0">
      <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
        <div
          className={`relative text-base items-center box-border caret-transparent flex justify-center leading-6 overflow-hidden rounded-xl md:text-lg md:leading-[27px] md:rounded-none ${imageContainerClass}`}
        >
          <a
            href={productUrl}
            className="text-base items-center box-border caret-transparent flex h-full justify-center leading-6 min-h-[auto] min-w-[auto] w-full md:text-lg md:leading-[27px]"
          >
            <img
              src={imageUrl}
              alt=""
              sizes={imageSizes}
              className="text-transparent text-base aspect-square box-border h-full leading-6 max-w-full min-h-[auto] min-w-[auto] object-cover mx-auto rounded-t-md md:text-lg md:leading-[27px]"
            />
            <div className="absolute text-black text-base font-semibold items-center bg-neutral-900/10 box-border caret-transparent gap-x-1.5 flex leading-4 gap-y-1.5 w-max px-5 py-2 rounded-[60px] left-[18px] top-5 md:left-[19px] md:top-[31px]">
              {tag}
            </div>
          </a>
        </div>
        <div className="text-base box-border caret-transparent gap-x-1 grid grid-cols-[minmax(0px,1fr)] justify-items-start leading-6 min-h-0 gap-y-1 w-full pb-2.5 px-2.5 right-0 md:text-lg md:content-start md:leading-[27px] md:min-h-[180px] md:pb-6 md:px-5">
          <div className="relative text-base box-border caret-transparent gap-x-[5px] flex justify-between leading-6 min-h-[auto] min-w-[auto] gap-y-2.5 w-full pt-6 md:text-lg md:gap-x-2.5 md:leading-[27px] before:accent-auto before:bg-[url('https://slumbercbn.com/cdn/shop/t/36/assets/border-line-night.svg?v=1714484081')] before:bg-top before:bg-no-repeat before:bg-size-[100%] before:box-border before:caret-transparent before:text-neutral-900 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-px before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:top-0 before:inset-x-0 before:font-pp_mori before:md:text-lg before:md:leading-[27px]">
            <div className="text-base items-baseline box-border caret-transparent gap-x-2 grid grid-flow-col grid-cols-[minmax(0px,1fr)] leading-6 min-h-[auto] min-w-[auto] gap-y-2 md:text-lg md:leading-[27px]">
              <span className="text-base box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] md:text-xl md:leading-[30px]">
                <a
                  href={productUrl}
                  className="text-base font-bold box-border caret-transparent leading-6 md:text-[19.2288px] md:leading-[28.8432px]"
                >
                  {productName}
                </a>
              </span>
              <a
                href={reviewsUrl}
                title={reviewTitle}
                className="text-base items-center box-border caret-transparent gap-x-1.5 hidden leading-6 gap-y-1.5 md:text-lg md:leading-[27px]"
              >
                <span className="text-xs box-border caret-transparent leading-[19.2px] md:text-sm md:leading-[22.4px]">
                  {ratingScore}
                </span>
                <div
                  role="img"
                  aria-label={ratingAriaLabel}
                  className="text-base box-border caret-transparent contents leading-6 md:text-lg md:leading-[27px]"
                >
                  <img
                    src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-13.svg"
                    alt="Icon"
                    className="relative text-amber-300 text-base box-border caret-transparent h-3 leading-6 w-3 -top-px md:text-lg md:h-[15px] md:leading-[27px] md:w-[15px]"
                  />
                </div>
              </a>
            </div>
            <div className="text-[15px] items-baseline box-border caret-transparent gap-x-2 flex flex-wrap leading-[22.5px] min-h-[auto] min-w-[auto] gap-y-0.5 text-right md:text-base md:leading-6">
              <div className="text-neutral-600 text-[15px] box-border caret-transparent block leading-[22.5px] min-h-[auto] min-w-[auto] md:text-base md:leading-6">
                {price}
                <span className="text-slate-700 text-sm font-semibold box-border caret-transparent block leading-[21px] md:text-base md:leading-6">
                  {subscriptionPrice}
                </span>
              </div>
            </div>
          </div>
          <div className="text-base items-center box-border caret-transparent flex justify-start leading-6 min-h-6 min-w-[auto] w-full md:text-lg md:leading-[27px]">
            <span className="text-base box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
              <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
                <div
                  role="img"
                  aria-label={detailedRatingAriaLabel}
                  className="text-base items-center box-border caret-transparent inline-flex leading-6 -ml-px md:text-lg md:leading-[27px]"
                >
                  <div className="relative text-base items-center box-border caret-transparent flex leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
                    <div className="text-base items-center box-border caret-transparent flex leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="text-base box-border caret-transparent h-5 leading-6 min-h-[auto] min-w-[auto] w-5 p-0.5 md:text-lg md:leading-[27px]"
                        >
                          <img
                            src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-14.svg"
                            alt="Icon"
                            className="text-base box-border caret-transparent leading-6 align-baseline m-auto md:text-lg md:leading-[27px]"
                          />
                        </div>
                      ))}
                    </div>
                    <div
                      className={`absolute text-base items-center box-border caret-transparent flex h-full leading-6 overflow-hidden left-0 top-0 md:text-lg md:leading-[27px] ${detailedRatingClass}`}
                    >
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="text-base box-border caret-transparent shrink-0 h-5 leading-6 min-h-[auto] min-w-[auto] w-5 p-0.5 md:text-lg md:leading-[27px]"
                        >
                          <img
                            src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-15.svg"
                            alt="Icon"
                            className="text-base box-border caret-transparent leading-6 align-baseline m-auto md:text-lg md:leading-[27px]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-xs box-border caret-transparent leading-[18px] min-h-[auto] min-w-[auto] ml-[3px] mt-1.5 md:text-sm md:leading-[21px] md:mt-0">
                    ({reviewCount})
                  </div>
                </div>
              </div>
            </span>
          </div>
          <div className="text-base box-border caret-transparent hidden leading-6 md:text-lg md:leading-[27px]">
            <div className="text-[15px] items-baseline box-border caret-transparent gap-x-2 flex flex-wrap leading-[22.5px] gap-y-0.5 text-right md:text-base md:leading-6">
              <div className="text-neutral-600 text-[15px] box-border caret-transparent block leading-[22.5px] md:text-base md:leading-6">
                <span className="text-slate-700 text-sm font-semibold box-border caret-transparent block leading-[21px] md:text-base md:leading-6">
                  {fromPrice}
                </span>
              </div>
            </div>
          </div>
          <div className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
            <p className="text-sm box-border caret-transparent leading-[21px] md:text-[17.2288px] md:leading-[25.8432px]">
              {description}
            </p>
          </div>
          <a
            href={reviewsUrl}
            title={reviewTitle}
            className="text-base items-center box-border caret-transparent gap-x-1.5 flex leading-6 min-h-[auto] min-w-[auto] gap-y-1.5 md:text-lg md:hidden md:leading-[27px] md:min-h-0 md:min-w-0"
          >
            <span className="text-xs box-border caret-transparent block leading-[19.2px] min-h-[auto] min-w-[auto] md:text-sm md:inline md:leading-[22.4px] md:min-h-0 md:min-w-0">
              {ratingScore}
            </span>
            <div
              role="img"
              aria-label={ratingOutOfFiveAriaLabel}
              className="text-base box-border caret-transparent contents leading-6 md:text-lg md:leading-[27px]"
            >
              <img
                src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-13.svg"
                alt="Icon"
                className="relative text-amber-300 text-base box-border caret-transparent h-3 leading-6 w-3 -top-px md:text-lg md:h-[15px] md:leading-[27px] md:w-[15px]"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
