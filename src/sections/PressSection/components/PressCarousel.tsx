import { TestimonialCard } from "@/sections/PressSection/components/TestimonialCard";

export const PressCarousel = () => {
  return (
    <div
      role="region"
      className="text-base items-start box-border caret-transparent grid leading-6 min-h-[auto] min-w-[auto] text-center -mx-5 scroll-px-[auto] md:text-lg md:leading-[27px] md:mx-0 md:scroll-px-0"
    >
      <TestimonialCard
        ariaLabel="Item 1 of 3"
        containerClassName=""
        imageSrc="https://c.animaapp.com/mn211sd3lp4PsU/assets/112.png"
        imageAlt=""
        showStars={true}
        blockquoteClassName="before:accent-auto before:bg-white/10 before:box-border before:caret-transparent before:text-neutral-900 before:hidden before:text-xl before:not-italic before:normal-nums before:font-normal before:h-[37px] before:tracking-[-0.4px] before:leading-[26px] before:list-outside before:list-disc before:[mask-image:url(data:image/svg+xml,%3Csvg%20width=%2786%27%20height=%2755%27%20viewBox=%270%200%2086%2055%27%20fill=%27none%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath%20d=%27M71.3163%2054.6H42.5163L60.3163%200.400024H85.5163L71.3163%2054.6ZM29.3163%2054.6H0.716309L18.9163%200.400024H44.1163L29.3163%2054.6Z%27%20fill=%27%23252627%27/%3E%3C/svg%3E%0A)] before:[mask-repeat:no-repeat] before:[mask-size:51px_37px] before:pointer-events-auto before:absolute before:text-left before:no-underline before:indent-[0px] before:normal-case before:visible before:w-[51px] before:border-separate before:left-1 before:-top-5 before:font-pp_mori before:md:text-[32px] before:h-[45px] before:tracking-[-0.64px] before:leading-[41.6px] before:[mask-size:70px_45px] before:w-[70px] before:left-2.5 before:-top-6"
        quote="Hands down the best sleep gummy I have tried. 30 minutes before bed and you are good to go! Great when I am traveling as well. I signed up for the subscription."
        author="Micheal H. (Verified Customer)"
        authorClassName="before:accent-auto before:bg-white before:box-border before:caret-transparent before:text-white before:block before:text-lg before:not-italic before:normal-nums before:font-semibold before:h-[3px] before:tracking-[normal] before:leading-[27px] before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-left before:no-underline before:indent-[0px] before:normal-case before:translate-y-[-1.5px] before:visible before:w-[18px] before:z-[1] before:border-separate before:left-0 before:top-2/4 before:font-pp_mori"
        activeButtonClassName="relative text-base bg-white caret-transparent block h-1.5 leading-6 min-h-[auto] min-w-[auto] w-1.5 p-0 rounded-full md:text-lg md:leading-[27px] before:accent-auto before:box-border before:caret-transparent before:text-white before:block before:text-base before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:-inset-2.5 before:font-pp_mori"
      />
      <TestimonialCard
        ariaLabel="Item 2 of 3"
        containerClassName="opacity-0 invisible"
        blockquoteClassName=""
        quote="I have had a huge problem with insomnia most of my adult life. One of these solves the problem. I am grateful."
        author="Susan L. (Verified Customer)"
        authorClassName=""
        activeButtonClassName="relative text-base bg-white caret-transparent block h-1.5 leading-6 min-h-[auto] min-w-[auto] w-1.5 p-0 rounded-full"
      />
      <TestimonialCard
        ariaLabel="Item 3 of 3"
        containerClassName="opacity-0 invisible"
        blockquoteClassName=""
        quote="This product is what I’ve been searching for! I’ve tried so many things and Deep Zzzs is what finally works! Very pleased."
        author="Sarah S. (Verified Buyer)"
        authorClassName=""
        activeButtonClassName="relative text-base bg-white caret-transparent block h-1.5 leading-6 min-h-[auto] min-w-[auto] w-1.5 p-0 rounded-full md:text-lg md:leading-[27px]"
      />
    </div>
  );
};
