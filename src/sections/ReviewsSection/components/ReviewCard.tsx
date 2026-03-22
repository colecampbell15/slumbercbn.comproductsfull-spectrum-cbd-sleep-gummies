export type ReviewCardProps = {
  avatarSrc: string;
  avatarAlt: string;
  avatarLabel: string;
  username: string;
  starsLabel: string;
  starsFilledWidth: string;
  timeAgo: string;
  reviewTitle: string;
  reviewBody: React.ReactNode;
  showReadMore?: boolean;
  showWouldRecommend?: boolean;
  upVoteCount?: number;
  downVoteCount?: number;
};

export const ReviewCard = (props: ReviewCardProps) => {
  return (
    <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 pb-8 md:flex-row">
      <div className="box-border caret-transparent max-w-full min-h-[auto] min-w-[220px] md:max-w-[220px]">
        <div className="items-center box-border caret-transparent flex">
          <div
            role="img"
            aria-label={props.avatarLabel}
            className="items-center box-border caret-transparent flex h-[46px] min-h-[auto] min-w-[46px] w-[46px] mr-2 rounded-[50%]"
          >
            <img
              src={props.avatarSrc}
              alt={props.avatarAlt}
              className="text-transparent box-border h-full max-w-full min-h-[auto] min-w-[auto] object-cover w-full rounded-[50%]"
            />
          </div>
          <div className="box-border caret-transparent leading-[19.2px] min-h-[auto] min-w-[auto]">
            <div className="items-center box-border caret-transparent gap-x-2 flex gap-y-2">
              <div className="box-border caret-transparent max-w-[153.516px] min-h-[auto] min-w-[auto] text-ellipsis text-nowrap overflow-hidden">
                {props.username}
              </div>
              <div
                aria-label="This customer received a perk in exchange for their honest review."
                className="box-border caret-transparent min-h-[auto] min-w-[auto]"
              >
                <div className="box-border caret-transparent">
                  <img
                    src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-46.svg"
                    alt="Icon"
                    className="box-border caret-transparent inline h-3 align-baseline w-3"
                  />
                </div>
              </div>
            </div>
            <div
              aria-label="Purchase verified by Junip"
              className="box-border caret-transparent inline-block"
            >
              <div className="text-sm items-center box-border caret-transparent flex leading-[14px] mt-1">
                <div className="items-start box-border caret-transparent flex h-3.5 min-h-[auto] min-w-[auto] w-3.5">
                  <img
                    src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-47.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-3.5 align-baseline w-3.5"
                  />
                </div>
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto] ml-1">
                  Verified buyer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] w-full">
        <div className="items-center box-border caret-transparent flex justify-between mb-4">
          <div
            aria-label={props.starsLabel}
            role="img"
            className="items-center box-border caret-transparent flex ml-[-3px] min-h-[auto] min-w-[auto]"
          >
            <div className="relative items-center box-border caret-transparent flex min-h-[auto] min-w-[auto]">
              <div className="items-center box-border caret-transparent gap-x-1 flex min-h-[auto] min-w-[auto] gap-y-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="box-border caret-transparent h-[18px] min-h-[auto] min-w-[auto] w-[18px]"
                  >
                    <img
                      src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-44.svg"
                      alt="Icon"
                      className="box-border caret-transparent align-baseline m-auto"
                    />
                  </div>
                ))}
              </div>
              <div
                className={`absolute items-center box-border caret-transparent gap-x-1 flex h-full gap-y-1 overflow-hidden left-0 top-0 ${props.starsFilledWidth}`}
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="box-border caret-transparent shrink-0 h-[18px] min-h-[auto] min-w-[auto] w-[18px]"
                  >
                    <img
                      src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-45.svg"
                      alt="Icon"
                      className="box-border caret-transparent align-baseline m-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="items-center box-border caret-transparent gap-x-2 flex min-h-[auto] min-w-[auto] gap-y-2">
            <div className="text-sm box-border caret-transparent leading-[21px] min-h-[auto] min-w-[auto] opacity-80 text-nowrap">
              {props.timeAgo}
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-4 flex flex-col justify-between gap-y-4 md:flex-row">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
            <div
              role="heading"
              className="text-lg font-semibold box-border caret-transparent leading-[27px] mb-2"
            >
              {props.reviewTitle}
            </div>
            <div className="box-border caret-transparent">
              <span className="box-border caret-transparent">
                {props.reviewBody}
              </span>
              {props.showReadMore && (
                <span
                  aria-label="Read more"
                  role="button"
                  className="box-border caret-transparent underline"
                >
                  Read more
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-4 flex gap-y-4 mt-6">
          {props.showWouldRecommend && (
            <div className="text-sm items-center box-border caret-transparent flex leading-[14px] min-h-[auto] min-w-[auto]">
              <div className="items-center bg-[url('https://widgets.juniphq.com/v1/images/4402299c7b701bcfc128.svg')] bg-no-repeat bg-size-[100%] box-border caret-transparent flex h-3.5 min-h-[auto] min-w-[auto] w-3 bg-center mr-1.5">
                {" "}
              </div>
              <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                Would recommend
              </div>
            </div>
          )}
          <div className="text-sm box-border caret-transparent gap-x-2 flex leading-[14px] min-h-[auto] min-w-[auto] gap-y-2 ml-auto">
            <div className="box-border caret-transparent hidden min-h-0 min-w-0 md:block md:min-h-[auto] md:min-w-[auto]">
              Helpful
            </div>
            <div
              aria-label={`Up vote review action - ${props.upVoteCount ?? 0}`}
              role="button"
              className="box-border caret-transparent gap-x-1 flex h-3.5 min-h-[auto] min-w-[auto] gap-y-1"
            >
              <div className="items-end box-border caret-transparent flex h-3.5 min-h-[auto] min-w-[auto] w-3.5">
                <img
                  src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-48.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-3.5 align-baseline w-3.5"
                />
              </div>
              {props.upVoteCount ? (
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                  {props.upVoteCount}
                </div>
              ) : null}
            </div>
            <div className="bg-black/10 box-border caret-transparent h-3.5 min-h-[auto] min-w-[auto] w-px">
              {" "}
            </div>
            <div
              aria-label={`Down vote review action - ${props.downVoteCount ?? 0}`}
              role="button"
              className="box-border caret-transparent gap-x-1 flex h-3.5 min-h-[auto] min-w-[auto] gap-y-1"
            >
              <div className="items-end box-border caret-transparent flex h-3.5 min-h-[auto] min-w-[auto] w-3.5">
                <img
                  src="https://c.animaapp.com/mn211sd3lp4PsU/assets/icon-49.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-3.5 align-baseline w-3.5"
                />
              </div>
              {props.downVoteCount ? (
                <div className="box-border caret-transparent min-h-[auto] min-w-[auto]">
                  {props.downVoteCount}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
