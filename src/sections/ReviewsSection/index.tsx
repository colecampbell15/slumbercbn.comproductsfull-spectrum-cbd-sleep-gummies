import { ReviewSummary } from "@/sections/ReviewsSection/components/ReviewSummary";
import { ReviewFilters } from "@/sections/ReviewsSection/components/ReviewFilters";
import { ReviewCard } from "@/sections/ReviewsSection/components/ReviewCard";

export const ReviewsSection = () => {
  return (
    <section className="relative text-base box-border caret-transparent flow-root leading-6 md:text-lg md:leading-[27px] bg-gray-50">
      <div className="text-base box-border caret-transparent leading-6 pl-[max(20px,50%_-_670px)] pr-[max(20px,50%_-_670px)] py-12 md:text-lg md:leading-[27px] md:pl-[max(48px,50%_-_670px)] md:pr-[max(48px,50%_-_670px)] md:py-20">
        <p className="text-[#5B2D8E] font-bold text-xs tracking-widest uppercase mb-2">Real Results</p>
        <h2 className="text-gray-900 text-[28px] font-black tracking-tight leading-tight mb-8 md:text-[36px]">
          What Our Customers Say
        </h2>
        <ReviewSummary />
        <div className="bg-black/10 h-px my-6" />
        <ReviewFilters />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ReviewCard
            avatarSrc="https://c.animaapp.com/mn211sd3lp4PsU/assets/884ce13ea7fd849a54f7.svg"
            avatarAlt="Sarah M"
            avatarLabel="Sarah M avatar"
            username="SarahM"
            starsLabel="5 stars"
            starsFilledWidth="w-full"
            timeAgo="2 days ago"
            reviewTitle="Shocked by how well this works!"
            reviewBody="I was skeptical at first — I&#39;ve tried so many whitening strips and they either hurt my teeth or don&#39;t work. Dr. White is completely different. After the first treatment I could already see a difference. After the full box my teeth are the brightest they&#39;ve ever been. Can&#39;t recommend this enough!"
            showReadMore={false}
            showWouldRecommend={true}
            upVoteCount={24}
            downVoteCount={0}
          />
          <ReviewCard
            avatarSrc="https://c.animaapp.com/mn211sd3lp4PsU/assets/5d827689759201cff60a.svg"
            avatarAlt="James T"
            avatarLabel="James T avatar"
            username="JamesT"
            starsLabel="5 stars"
            starsFilledWidth="w-full"
            timeAgo="5 days ago"
            reviewTitle="Better than my dentist&#39;s whitening tray"
            reviewBody="My dentist charges $400 for an in-office whitening. Dr. White gave me comparable results for a fraction of the price. I&#39;m a convert for life. The Arctic Mint variant leaves my breath feeling fresh too!"
            showWouldRecommend={true}
            upVoteCount={18}
            downVoteCount={0}
          />
          <ReviewCard
            avatarSrc="https://c.animaapp.com/mn211sd3lp4PsU/assets/fbcf3da62b186bf978e5.svg"
            avatarAlt="Priya K"
            avatarLabel="Priya K avatar"
            username="PriyaK"
            starsLabel="5 stars"
            starsFilledWidth="w-full"
            timeAgo="1 week ago"
            reviewTitle="Perfect before my wedding!"
            reviewBody="Ordered the 3-box bundle two weeks before my wedding and WOW. Everyone kept commenting on how bright my smile was. The strips are so easy to apply and don&#39;t slip off. Zero sensitivity too. 10/10."
            showReadMore={false}
            showWouldRecommend={true}
            upVoteCount={31}
            downVoteCount={0}
          />
          <ReviewCard
            avatarSrc="https://c.animaapp.com/mn211sd3lp4PsU/assets/3eb9cefa1ded9b4a1494.svg"
            avatarAlt="Mike D"
            avatarLabel="Mike D avatar"
            username="MikeD"
            starsLabel="5 stars"
            starsFilledWidth="w-4/5"
            timeAgo="1 week ago"
            reviewTitle="Great results, fast shipping"
            reviewBody="Arrived in 2 days and the results speak for themselves. I drink a lot of coffee and my teeth were pretty stained. After 7 treatments they look noticeably whiter. Have already ordered the 4-box bundle."
            showWouldRecommend={true}
            upVoteCount={12}
            downVoteCount={0}
          />
          <ReviewCard
            avatarSrc="https://c.animaapp.com/mn211sd3lp4PsU/assets/ceaa88bd96da5dfcbae1.svg"
            avatarAlt="Emma R"
            avatarLabel="Emma R avatar"
            username="EmmaR"
            starsLabel="5 stars"
            starsFilledWidth="w-full"
            timeAgo="2 weeks ago"
            reviewTitle="Sensitive teeth — no problem!"
            reviewBody="I have very sensitive teeth and was nervous to try these. Used the Classic White variant and had absolutely zero sensitivity or pain. My teeth look amazing and I can finally smile confidently in photos."
            showWouldRecommend={true}
            upVoteCount={28}
            downVoteCount={0}
          />
          <ReviewCard
            avatarSrc="https://c.animaapp.com/mn211sd3lp4PsU/assets/884ce13ea7fd849a54f7.svg"
            avatarAlt="Carlos B"
            avatarLabel="Carlos B avatar"
            username="CarlosB"
            starsLabel="5 stars"
            starsFilledWidth="w-full"
            timeAgo="3 weeks ago"
            reviewTitle="Charcoal Ice is my favorite"
            reviewBody="Tried all 4 variants and Charcoal Ice is the one. The slight activated charcoal feel makes it seem extra powerful. Results are incredible. My coworkers asked if I got professional whitening done!"
            showWouldRecommend={true}
            upVoteCount={19}
            downVoteCount={0}
          />
        </div>
        <div className="flex justify-center mt-8">
          <button className="text-white text-sm font-bold bg-[#5B2D8E] px-8 py-3 rounded-2xl shadow-lg hover:bg-purple-800 transition-colors">
            Load More Reviews
          </button>
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">★ 4.8/5 — Based on 2,341 verified reviews</p>
      </div>
    </section>
  );
};
