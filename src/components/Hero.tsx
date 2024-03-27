export default function Hero() {
  return (
    <div className="w-[1182px] flex flex-row items-end justify-start gap-[26px] max-w-full text-left text-35xl text-black font-montserrat lg:flex-wrap">
      <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[9px] pl-0 box-border min-w-[349px] min-h-[398px] max-w-full lg:min-h-[auto] mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[35px] max-w-full mq750:gap-[17px_35px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
            <h1 className="m-0 relative font-bold inline-block max-w-full text-24xl">
              World’s Biggest
            </h1>
            <h1 className="m-0 relative text-20xl font-bold text-darkslateblue ">
              Antique Collection
            </h1>
            <h3 className="m-0 relative text-mid leading-[180.9%] font-semibold font-inherit text-gray-200 inline-block max-w-full">
              <p className="m-0">
                From they fine john he give of rich he. They age and draw mrs
                like. Improving end distruts may instantly was household
                applauded incommode.
              </p>
            </h3>
          </div>
          <div className="flex flex-row items-start justify-start gap-[31px] max-w-full text-sm mq450:flex-wrap mq450:gap-[31px_15px]">
            <button className="cursor-pointer [border:none] py-[15px] px-[33px] bg-darkorange rounded-3xs shadow-[0px_24px_16px_-14px_rgba(255,_123,_41,_0.31)] flex flex-row items-start justify-start whitespace-nowrap hover:bg-chocolate">
              <div className="h-[45px] w-[150px] relative rounded-3xs bg-darkorange shadow-[0px_24px_16px_-14px_rgba(255,_123,_41,_0.31)] hidden" />
              <div className="relative text-xs font-medium font-montserrat text-gray-100 text-left inline-block min-w-[84px] z-[1]">
                Discover Now
              </div>
            </button>
            <div className="h-[45px] flex flex-row items-start justify-start gap-[11px]">
              <div className="h-[45px] w-[45px] relative flex items-center justify-center">
                <img
                  className="h-full w-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.311)]"
                  loading="lazy"
                  alt=""
                  src="/group-5.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                <div className="relative font-semibold inline-block min-w-[93px]">
                  Watch Video
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[529px] w-[409px] relative object-cover max-w-full"
        loading="lazy"
        alt=""
        src="/image-1@2x.png"
      />
      <div className="h-[393px] w-[184px] flex flex-col items-start justify-start text-17xl">
        <div className="self-stretch h-[237px] flex flex-col items-start justify-start gap-[15px]">
          <div className="flex-1 flex flex-row items-end justify-start gap-[14px]">
            <div className="h-[60px] w-[60px] relative flex items-center justify-center">
              <img
                className="h-full w-full mb-4 object-contain absolute left-[0px] top-[18px] [transform:scale(1.583)]"
                loading="lazy"
                alt=""
                src="/group-8.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[5px]">
              <b className="relative inline-block min-w-[78px] mq1050:text-10xl mq450:text-3xl">
                1322
              </b>
              <div className="relative text-base font-medium text-gray-200 inline-block min-w-[36px]">
                Year
              </div>
            </div>
          </div>
          <div className="flex flex-row items-end justify-start gap-[14px]">
            <div className="h-[62px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
              <div className="w-[60px] h-[60px] relative flex items-center justify-center">
                <img
                  className="w-full h-full object-contain absolute left-[0px] top-[18px] [transform:scale(1.583)]"
                  loading="lazy"
                  alt=""
                  src="/group-9.svg"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[5px]">
              <b className="relative inline-block min-w-[45px] mq1050:text-10xl mq450:text-3xl">
                29
              </b>
              <div className="relative text-base font-medium text-gray-200 inline-block min-w-[88px]">
                Bids so far.
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[14px]">
            <div className="h-[60px] w-[60px] relative flex items-center justify-center">
              <img
                className="h-full w-full object-contain absolute left-[0px] top-[18px] [transform:scale(1.583)]"
                loading="lazy"
                alt=""
                src="/group-10.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
              <h1 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[110px] mq1050:text-10xl mq450:text-3xl">
                China
              </h1>
              <div className="relative text-base font-medium text-gray-200 inline-block min-w-[48px]">
                origin
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
