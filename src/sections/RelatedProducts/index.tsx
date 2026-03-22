import { ProductCard } from "@/sections/RelatedProducts/components/ProductCard";

export const RelatedProducts = () => {
  return (
    <section className="relative text-base box-border caret-transparent flow-root leading-6 md:text-lg md:leading-[27px]">
      <div className="text-base bg-slate-50 box-border caret-transparent leading-6 pl-[max(20px,50%_-_670px)] pr-[max(20px,50%_-_670px)] py-12 md:text-lg md:leading-[27px] md:pl-[max(48px,50%_-_670px)] md:pr-[max(48px,50%_-_670px)] md:py-20">
        <div className="text-base box-border caret-transparent gap-x-5 grid auto-cols-[minmax(0px,1fr)] leading-6 gap-y-8 md:text-lg md:gap-x-16 md:leading-[27px] md:gap-y-12">
          <div className="text-base items-center box-border caret-transparent gap-x-5 flex flex-wrap grid-cols-none justify-normal justify-items-start leading-6 min-h-[auto] min-w-[auto] gap-y-5 md:text-lg md:grid-cols-[700px] md:justify-between md:leading-[27px]">
            <div className="text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
              <h2 className="text-neutral-900 text-[28px] box-border caret-transparent tracking-[-0.56px] leading-[33.6px] mb-5 md:text-[36.3648px] md:tracking-[-0.727296px] md:leading-[43.6378px]">
                Looking to compliment your night routine?
              </h2>
              <p className="text-base box-border caret-transparent leading-6 mt-5 md:text-lg md:leading-[27px] md:mt-8">
                Shop our daytime wellness line.
              </p>
            </div>
            <a
              href="/collections/daytime"
              className="relative text-white text-sm font-semibold items-center bg-slate-500 box-border caret-transparent gap-x-0 flex h-[60px] justify-center leading-[18.2px] min-h-[auto] min-w-[auto] gap-y-0 text-center uppercase px-[22px] py-[15px] rounded-[40px] md:text-base md:justify-between md:leading-[20.8px] md:p-5"
            >
              <span className="text-sm bg-[linear-gradient(to_right,rgb(255,255,255),rgb(255,255,255))] bg-no-repeat bg-size-[0px_1px] box-border caret-transparent flex leading-[14px] min-h-[auto] min-w-[auto] bg-[position:0px_min(100%,18.9px)] md:text-base md:leading-[20.8px] md:bg-[position:left_min(100%,21.6px)]">
                View all
              </span>
              <span className="text-sm box-border caret-transparent flex leading-[18.2px] min-h-[auto] min-w-[auto] md:text-base md:leading-[20.8px]">
                <i className="text-sm font-black box-border caret-transparent block leading-[14px] min-h-[auto] min-w-[auto] ml-2.5 font-font_awesome_6_free md:text-base md:leading-4 before:accent-auto before:items-center before:bg-[url('https://slumbercbn.com/cdn/shop/files/white-artrow-right1.png?v=1760095084')] before:bg-left-top before:bg-no-repeat before:bg-cover before:box-border before:caret-transparent before:text-white before:flex before:text-sm before:not-italic before:normal-nums before:font-black before:h-3 before:justify-center before:tracking-[normal] before:leading-[14px] before:list-outside before:list-disc before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:uppercase before:visible before:w-3.5 before:border-separate before:font-font_awesome_6_free before:md:bg-center before:md:text-base before:md:leading-4"></i>
              </span>
            </a>
          </div>
          <div className="relative text-base box-border caret-transparent leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
            <div className="relative text-base box-border caret-transparent grid leading-6 overflow-x-auto overflow-y-hidden overscroll-x-contain -mx-5 px-5 scroll-px-5 md:text-lg md:leading-[27px] md:-mx-12 md:px-12 md:scroll-px-12">
              <div className="text-base box-border caret-transparent block leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
                <div className="relative text-base box-border caret-transparent gap-x-2 grid grid-cols-[repeat(2,minmax(0px,1fr))] grid-rows-[auto] leading-6 gap-y-6 scroll-pt-[127px] md:text-lg md:gap-x-6 md:grid-cols-[repeat(3,minmax(0px,1fr))] md:grid-rows-[auto_auto] md:leading-[27px] md:scroll-pt-[180px]">
                  <ProductCard
                    productUrl="/products/afternoon-delight-cbd-thc-gummies"
                    imageUrl="https://c.animaapp.com/mn211sd3lp4PsU/assets/image-1.gif"
                    imageSizes="(max-width: 699px) calc(100vw / 2 - 40px), (max-width: 1200px) calc(100vw / 3 - 64px), calc((100vw - 96px) / 3 - (24px / 3 * 2))"
                    tag="#High-Potency"
                    imageContainerClass="bg-stone-50"
                    productName="Afternoon Delight CBD + THC Gummies"
                    ratingScore="4.6"
                    reviewCount={150}
                    ratingAriaLabel="4.6 out of 5.0 stars"
                    detailedRatingAriaLabel="4.59 stars, 150 reviews"
                    detailedRatingClass="w-[91.8667%]"
                    price="$60.00"
                    subscriptionPrice="$45.00/month"
                    fromPrice="From $45.00"
                    description="Take the edge off and experience the bliss with 5mg THC, 30mg CBD, and 15mg CBG"
                    ratingOutOfFiveAriaLabel="4.6 out of 5.0 stars"
                  />
                  <ProductCard
                    productUrl="/products/daily-dose-cbd-cbg-tincture"
                    imageUrl="https://c.animaapp.com/mn211sd3lp4PsU/assets/image-1.gif"
                    imageSizes="(max-width: 699px) calc(100vw / 2 - 40px), (max-width: 1200px) calc(100vw / 3 - 64px), calc((100vw - 96px) / 3 - (24px / 3 * 2))"
                    tag="#Full Spectrum"
                    imageContainerClass="bg-orange-50"
                    productName="Daily Dose CBD CBG Tincture"
                    ratingScore="4.9"
                    reviewCount={16}
                    ratingAriaLabel="4.9 out of 5.0 stars"
                    detailedRatingAriaLabel="4.88 stars, 16 reviews"
                    detailedRatingClass="w-[97.5%]"
                    price="$60.00"
                    subscriptionPrice="$45.00/month"
                    fromPrice="From $45.00"
                    description="Your perfect sidekick to combat whatever life throws your way - CBD for relief and CBG for focus.*"
                    ratingOutOfFiveAriaLabel="4.9 out of 5.0 stars"
                  />
                  <ProductCard
                    productUrl="/products/extra-strength-cbg-gummies"
                    imageUrl="https://c.animaapp.com/mn211sd3lp4PsU/assets/image-1.gif"
                    imageSizes="(max-width: 699px) calc(100vw / 2 - 40px), (max-width: 1200px) calc(100vw / 3 - 64px), calc((100vw - 96px) / 3 - (24px / 3 * 2))"
                    tag="#Daytime Ready"
                    imageContainerClass="bg-orange-50"
                    productName="Extra Strength CBG Gummies"
                    ratingScore="4.5"
                    reviewCount={84}
                    ratingAriaLabel="4.5 out of 5.0 stars"
                    detailedRatingAriaLabel="4.51 stars, 84 reviews"
                    detailedRatingClass="w-[90.2381%]"
                    price="$60.00"
                    subscriptionPrice="$45.00/month"
                    fromPrice="From $45.00"
                    description="Cleaner energy and calmer focus with 30mg CBG and zero THC."
                    ratingOutOfFiveAriaLabel="4.5 out of 5.0 stars"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
