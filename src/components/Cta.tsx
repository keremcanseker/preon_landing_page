export default function Cta() {
  return (
    <div className="my-[10rem] self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-20xl text-white">
      <div className="h-[1007px] flex-1 relative max-w-full mq450:h-auto mq450:min-h-[1007]">
        <div className="absolute top-[389px] left-[0px] w-full h-[618px] max-w-full mq450:h-auto mq450:min-h-[618]">
          <div className="absolute h-[64.72%] w-full top-[35.28%] right-[0%] bottom-[0%] left-[0%] rounded-11xl bg-gray-300" />
          <h1 className="m-0 absolute top-[47.41%] left-[5.83%] text-inherit font-bold font-inherit z-[1] mq1050:text-12xl mq450:text-4xl">
            Subscribe our newsletter
          </h1>
          <div className="absolute top-[57.44%] left-[6%] text-base leading-[180.9%] font-medium z-[1]">
            <p className="m-0">
              Reciev latest news, update, and many other things
            </p>
            <p className="m-0">every week.</p>
          </div>
          <img
            className="absolute h-[93.53%] w-[20.0%] top-[0%] right-[9.5%] bottom-[6.47%] left-[73.25%] max-w-full overflow-hidden max-h-full object-cover z-[99]"
            loading="lazy"
            alt=""
            src="/ekran-grnts-20211230-120326-1@2x.png"
          />
          <div className="absolute h-[11.33%] w-2/5 top-[76.54%] right-[54%] bottom-[12.14%] left-[6%] flex flex-row items-start justify-between py-2.5 pr-2.5 pl-8 box-border gap-[20px] max-w-full z-[1] mq450:flex-wrap">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-white" />
            <input
              className="w-[280px] [border:none] [outline:none] bg-[transparent] h-[41px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border font-montserrat font-medium text-base text-black z-[99]"
              placeholder="Enter Your email address"
              type="text"
            />
            <div className="h-[50px] w-[50px] relative z-[1] flex items-center justify-center">
              <img
                className="h-full w-full z-[99] object-contain absolute left-[0px] top-[11px] [transform:scale(1.44)] cursor-pointer hover:text-opacity-20"
                alt=""
                src="/group-38.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[70px] w-[957px] flex flex-row items-end justify-start gap-[97px] max-w-full z-[2] text-27xl text-black mq1050:flex-wrap">
          <img
            className="h-[449px] w-[372px] relative object-cover max-w-full mq1050:flex-1"
            loading="lazy"
            alt=""
            src="/image-12@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-start min-w-[317px] min-h-[343px] max-w-full mq1050:min-h-[auto]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
                <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block max-w-full mq1050:text-18xl mq450:text-9xl">
                  Buyer’s Feedback
                </h1>
                <h3 className="m-0 relative text-lg leading-[180.9%] font-semibold font-inherit text-gray-200">
                  <p className="m-0">
                    Whoe front da of piate heard ah ought. His defective
                  </p>
                  <p className="m-0">{`nor convinced residense won. Conenction has put `}</p>
                  <p className="m-0">impossible own apartments boisterous.</p>
                </h3>
              </div>
              <div className="h-16 flex flex-row items-start justify-start gap-[21px] text-sm">
                <img
                  className="h-16 w-16 relative object-cover min-h-[64px]"
                  loading="lazy"
                  alt=""
                  src="/mask-group@2x.png"
                />
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <b className="relative inline-block min-w-[102px]">
                    Selena Hakim
                  </b>
                  <div className="flex flex-row items-start justify-start pt-0 px-0 pb-2 text-gray-200">
                    <div className="relative font-medium inline-block min-w-[84px]">
                      UI Designer
                    </div>
                  </div>
                  <div className="h-3 flex flex-row items-start justify-start gap-[5px]">
                    <img
                      className="h-3 w-3 relative min-h-[12px]"
                      loading="lazy"
                      alt=""
                      src="/vuesaxlinearstar.svg"
                    />
                    <img
                      className="h-3 w-3 relative min-h-[12px]"
                      loading="lazy"
                      alt=""
                      src="/vuesaxlinearstar.svg"
                    />
                    <img
                      className="h-3 w-3 relative min-h-[12px]"
                      loading="lazy"
                      alt=""
                      src="/vuesaxlinearstar.svg"
                    />
                    <img
                      className="h-3 w-3 relative min-h-[12px]"
                      loading="lazy"
                      alt=""
                      src="/vuesaxlinearstar.svg"
                    />
                    <img
                      className="h-3 w-3 relative min-h-[12px]"
                      alt=""
                      src="/vuesaxlinearstar.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
