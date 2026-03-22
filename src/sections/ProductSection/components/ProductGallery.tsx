import { MediaCarousel } from "@/sections/ProductSection/components/MediaCarousel";

interface ProductGalleryProps {
  selectedVariant?: number;
  onVariantChange?: (index: number) => void;
}

export const ProductGallery = ({ selectedVariant = 0, onVariantChange }: ProductGalleryProps) => {
  return (
    <div className="text-base box-border caret-transparent gap-x-5 grid auto-cols-[minmax(0px,1fr)] leading-6 min-h-[auto] min-w-[auto] gap-y-5 md:text-lg md:gap-x-12 md:leading-[27px] md:gap-y-6">
      <div className="text-base box-border caret-transparent gap-x-2.5 grid leading-6 min-h-[auto] min-w-[auto] gap-y-2.5 md:text-lg md:leading-[27px]">
        <div className="relative text-base box-border caret-transparent grid leading-6 min-h-[auto] min-w-[auto] md:text-lg md:leading-[27px]">
          <MediaCarousel selectedVariant={selectedVariant} onVariantChange={onVariantChange} />
        </div>
      </div>
    </div>
  );
};
