import { CartEmpty } from "@/sections/CartDrawer/components/CartEmpty";
import { CartProductCard } from "@/sections/CartDrawer/components/CartProductCard";

export const CartDrawer = () => {
  return (
    <div className="fixed text-base bg-white box-border caret-transparent h-full leading-6 w-full z-[2147483640] overflow-hidden m-auto -right-full top-0 md:text-lg md:leading-[27px] md:right-[-500px] md:w-[500px]">
      <div className="text-base bg-slate-50 box-border caret-transparent flex flex-col h-full leading-6 outline-transparent outline outline-1 md:text-lg md:leading-[27px]">
        <div className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
          <div className="text-slate-900 text-base items-center bg-slate-50/90 box-border caret-transparent flex shrink-0 justify-between leading-6 px-5 py-3 md:text-lg md:leading-[27px] md:px-[30px]">
            <img
              src="https://c.animaapp.com/mn211sd3lp4PsU/assets/96.png"
              alt="Brand logo"
              className="text-transparent text-base box-border leading-6 max-h-[39px] max-w-[50%] min-h-[auto] min-w-[auto] object-contain md:text-lg md:leading-[27px]"
            />
            <div className="text-base items-center bg-slate-600 box-border caret-transparent flex h-[30px] justify-center leading-6 min-h-[auto] min-w-[auto] w-[30px] rounded-[40px] md:text-lg md:leading-[27px]">
              <img
                src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-61.svg"
                alt="Icon"
                className="text-base box-border caret-transparent h-[33%] leading-6 align-baseline w-[33%] md:text-lg md:leading-[27px]"
              />
            </div>
          </div>
          <div className="text-base box-border caret-transparent flex flex-col leading-6 text-center pt-[18px] pb-9 px-[30px] md:text-lg md:leading-[27px]">
            <div className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] mb-5">
              <p className="box-border caret-transparent">
                You’re{" "}
                <b className="font-bold box-border caret-transparent">$75.00</b>
                away from free shipping!
              </p>
            </div>
            <div className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
              <div className="relative text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
                <div className="relative text-base box-border caret-transparent gap-x-1.5 flex h-2 leading-6 gap-y-1.5 w-full md:text-lg md:leading-[27px]">
                  <div className="relative text-base bg-stone-300 box-border caret-transparent basis-[calc(50%_-_2px)] shrink-0 h-full leading-6 min-h-[auto] min-w-[auto] rounded-bl rounded-br rounded-tl rounded-tr md:text-lg md:leading-[27px]">
                    <div className="absolute text-base bg-sky-300 box-border caret-transparent h-full leading-6 w-[0%] rounded-bl rounded-br rounded-tl rounded-tr left-0 top-0 md:text-lg md:leading-[27px]"></div>
                    <div className="absolute text-base box-border caret-transparent leading-6 top-[-11px] translate-x-[50.0%] right-3 md:text-lg md:leading-[27px]">
                      <div className="text-base items-center bg-stone-300 box-border caret-transparent flex fill-stone-400 h-[30px] justify-center leading-6 w-[30px] rounded-[50%] md:text-lg md:leading-[27px]">
                        <img
                          src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-62.svg"
                          alt="Icon"
                          className="text-base box-border caret-transparent h-5 leading-6 align-baseline w-5 md:text-lg md:leading-[27px]"
                        />
                      </div>
                      <div className="absolute text-[10px] box-border caret-transparent leading-3 translate-x-[-50.0%] w-20 mt-0.5 left-2/4 top-full">
                        FREE Shipping
                      </div>
                    </div>
                  </div>
                  <div className="relative text-base bg-stone-300 box-border caret-transparent basis-[calc(50%_-_2px)] shrink-0 h-full leading-6 min-h-[auto] min-w-[auto] rounded-bl rounded-br rounded-tl rounded-tr md:text-lg md:leading-[27px]">
                    <div className="absolute text-base bg-sky-300 box-border caret-transparent h-full leading-6 w-[0%] rounded-bl rounded-br rounded-tl rounded-tr left-0 top-0 md:text-lg md:leading-[27px]"></div>
                    <div className="absolute text-base box-border caret-transparent leading-6 top-[-11px] translate-x-[50.0%] right-3 md:text-lg md:leading-[27px]">
                      <div className="text-base items-center bg-stone-300 box-border caret-transparent flex fill-stone-400 h-[30px] justify-center leading-6 w-[30px] rounded-[50%] md:text-lg md:leading-[27px]">
                        <img
                          src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-63.svg"
                          alt="Icon"
                          className="text-base box-border caret-transparent h-5 leading-6 align-baseline w-5 md:text-lg md:leading-[27px]"
                        />
                      </div>
                      <div className="absolute text-[10px] box-border caret-transparent leading-3 translate-x-[-50.0%] w-20 mt-0.5 left-2/4 top-full">
                        FREE Slumber Eye Mask
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CartEmpty />
        <div className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] mb-2 pt-3 pb-2 md:text-lg md:leading-[27px]">
          <div className="text-slate-900 text-lg box-border caret-transparent leading-[27px] text-center p-7">
            <p className="box-border caret-transparent">Shop Best Sellers</p>
          </div>
          <div className="text-white text-base bg-indigo-800 box-border caret-transparent leading-6 text-center w-[calc(100%_-_60px)] mx-[30px] my-5 p-2 rounded-[40px] md:text-lg md:leading-[27px]">
            <a
              href="/collections/top-sellers"
              className="text-base font-semibold box-border caret-transparent leading-6 md:text-lg md:leading-[27px]"
            >
              Shop Now
            </a>
          </div>
          <div className="text-slate-900 text-2xl font-semibold box-border caret-transparent leading-9 text-center mb-3 px-[30px]">
            <p className="box-border caret-transparent">
              <strong className="font-black box-border caret-transparent">
                Customer Favorites
              </strong>
            </p>
          </div>
          <div
            role="listbox"
            aria-label="Product carousel"
            className="relative text-base items-center box-border caret-transparent flex leading-6 w-full md:text-lg md:leading-[27px]"
          >
            <button
              aria-label="Previous slide"
              type="button"
              className="text-base bg-transparent caret-transparent block shrink-0 leading-6 min-h-[auto] min-w-[auto] opacity-50 p-0 md:text-lg md:leading-[27px]"
            >
              <img
                src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-64.svg"
                alt="Icon"
                className="text-base box-border caret-transparent inline h-3.5 leading-6 align-baseline w-3.5 md:text-lg md:leading-[27px]"
              />
            </button>
            <div className="text-base box-border caret-transparent basis-[0%] grow leading-6 min-h-[auto] min-w-[auto] overflow-hidden md:text-lg md:leading-[27px]">
              <div className="text-base box-border caret-transparent flex leading-6 md:text-lg md:leading-[27px]">
                <div className="text-base box-border caret-transparent basis-full shrink-0 leading-6 min-h-[auto] min-w-[auto] text-center overflow-hidden p-0.5 md:text-lg md:leading-[27px]">
                  <CartProductCard
                    productUrl="/products/full-spectrum-cbd-sleep-gummies"
                    productName="Deep Zzzs CBD CBN THC Gummies For Sleep"
                    productImage="https://c.animaapp.com/mn211sd3lp4PsU/assets/158.jpg"
                    fullStars="★★★★"
                    partialStarWidth="41%"
                    reviewCount="1478"
                    price="$60.00"
                    outerClassName=""
                  />
                </div>
                <CartProductCard
                  productUrl="/products/afternoon-delight-cbd-thc-gummies"
                  productName="Afternoon Delight CBD + THC Gummies"
                  productImage="https://c.animaapp.com/mn211sd3lp4PsU/assets/93.jpg"
                  fullStars="★★★★"
                  partialStarWidth="59%"
                  reviewCount="150"
                  price="$60.00"
                  outerClassName="basis-full shrink-0 text-center overflow-hidden p-0.5"
                />
                <CartProductCard
                  productUrl="/products/cbn-capsules-for-sleep"
                  productName="Night Caps CBD CBN Capsules for Sleep"
                  productImage="https://c.animaapp.com/mn211sd3lp4PsU/assets/94.jpg"
                  fullStars="★★★★"
                  partialStarWidth="31%"
                  reviewCount="175"
                  price="$60.00"
                  outerClassName="basis-full shrink-0 text-center overflow-hidden p-0.5"
                />
              </div>
            </div>
            <button
              aria-label="Next slide"
              type="button"
              className="text-base bg-transparent caret-transparent block shrink-0 leading-6 min-h-[auto] min-w-[auto] p-0 md:text-lg md:leading-[27px]"
            >
              <img
                src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-65.svg"
                alt="Icon"
                className="text-base box-border caret-transparent inline h-3.5 leading-6 align-baseline w-3.5 md:text-lg md:leading-[27px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
