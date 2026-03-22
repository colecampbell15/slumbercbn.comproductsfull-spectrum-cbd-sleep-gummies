import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { FooterColumn } from "@/sections/Footer/components/FooterColumn";
import { FooterDisclosure } from "@/sections/Footer/components/FooterDisclosure";
import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";

export const Footer = () => {
  return (
    <footer className="relative text-base box-border caret-transparent flow-root leading-6 md:text-lg md:leading-[27px]">
      <div className="text-white text-base bg-gray-800 box-border caret-transparent leading-6 md:text-lg md:leading-[27px]">
        <div className="text-base box-border caret-transparent leading-6 py-20 md:text-lg md:leading-[27px] md:pt-[50px] md:pb-[45px]">
          <div className="text-base box-border caret-transparent leading-6 ml-[max(20px,50%_-_670px)] mr-[max(20px,50%_-_670px)] md:text-lg md:leading-[27px] md:ml-[max(48px,50%_-_670px)] md:mr-[max(48px,50%_-_670px)]">
            <div className="text-base box-border caret-transparent gap-x-10 grid leading-6 gap-y-10 md:text-lg md:gap-x-16 md:leading-[27px] md:gap-y-16">
              <div className="text-base items-start box-border caret-transparent gap-x-10 grid grid-flow-dense grid-cols-[repeat(2,minmax(0px,1fr))] justify-start leading-6 min-h-[auto] min-w-[auto] gap-y-10 md:text-lg md:gap-x-24 md:flex md:justify-between md:leading-[27px]">
                <FooterBrand />
                <FooterColumn
                  title="About"
                  links={[
                    { href: "#", label: "Our Story" },
                    { href: "#", label: "How It Works" },
                    { href: "#", label: "Ingredients" },
                    { href: "#", label: "Before & After Gallery" },
                    { href: "#", label: "Dental Professional Portal" },
                    { href: "#", label: "Wholesale" },
                  ]}
                />
                <FooterColumn
                  title="Shop"
                  links={[
                    { href: "#", label: "Whitening Strips" },
                    { href: "#", label: "Bundle Deals" },
                    { href: "#", label: "Classic White" },
                    { href: "#", label: "Arctic Mint" },
                    { href: "#", label: "Charcoal Ice" },
                    { href: "#", label: "Rose Enamel" },
                  ]}
                />
                <FooterColumn
                  title="Support"
                  links={[
                    { href: "#", label: "Help Center" },
                    { href: "#", label: "Track Your Order" },
                    { href: "#", label: "Returns & Refunds" },
                    { href: "#", label: "Privacy Policy" },
                    { href: "#", label: "Shipping Policy" },
                    { href: "#", label: "Terms of Service" },
                    { href: "#", label: "Contact Us" },
                  ]}
                  extraClassName="mr-0 md:mr-10"
                />
              </div>
            </div>
          </div>
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};
