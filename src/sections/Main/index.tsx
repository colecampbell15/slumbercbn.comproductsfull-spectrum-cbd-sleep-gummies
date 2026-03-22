import { ProductSection } from "@/sections/ProductSection";
import { FeaturesSection } from "@/sections/FeaturesSection";
import { MarqueeSection } from "@/sections/MarqueeSection";
import { ComparisonSection } from "@/sections/ComparisonSection";
import { GuaranteeSection } from "@/sections/GuaranteeSection";
import { ReviewsSection } from "@/sections/ReviewsSection";
import { Footer } from "@/sections/Footer";
import { SocialProofBar } from "@/sections/SocialProofBar";
import { BeforeAfterSection } from "@/sections/BeforeAfterSection";

export const Main = () => {
  return (
    <main
      role="main"
      className="text-base box-border caret-transparent leading-6 overflow-hidden md:text-lg md:leading-[27px] md:overflow-visible"
    >
      <ProductSection />
      <SocialProofBar />
      <FeaturesSection />
      <MarqueeSection />
      <BeforeAfterSection />
      <ComparisonSection />
      <GuaranteeSection />
      <ReviewsSection />
      <Footer />
    </main>
  );
};
