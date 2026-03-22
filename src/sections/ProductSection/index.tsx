import { useState } from "react";
import { ProductGallery } from "@/sections/ProductSection/components/ProductGallery";
import { ProductInfo } from "@/sections/ProductSection/components/ProductInfo";

export const ProductSection = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);

  return (
    <section className="relative text-base box-border caret-transparent flow-root leading-6 md:text-lg md:leading-[27px]">
      <div className="text-base box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
        <div className="text-base bg-white box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
          <div className="text-base box-border caret-transparent leading-6 pl-[max(20px,50%_-_670px)] pr-[max(20px,50%_-_670px)] pt-6 pb-12 md:text-lg md:leading-[27px] md:pl-[max(48px,50%_-_670px)] md:pr-[max(48px,50%_-_670px)] md:pt-12">
            <div className="text-base items-start box-border caret-transparent gap-x-10 grid grid-cols-[minmax(0px,1fr)] grid-rows-[auto] leading-6 gap-y-5 md:text-lg md:gap-x-12 md:grid-cols-[minmax(0px,1.1fr)_minmax(0px,0.9fr)] md:leading-[27px] md:gap-y-12">
              <ProductGallery selectedVariant={selectedVariant} onVariantChange={setSelectedVariant} />
              <ProductInfo selectedVariant={selectedVariant} onVariantChange={setSelectedVariant} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
