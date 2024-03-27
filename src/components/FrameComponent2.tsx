import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type FrameComponent2Type = {
  data2?: string;
  year1078?: string;
  prop?: string;
  bidsDoFar?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  data2,
  year1078,
  prop,
  bidsDoFar,
  propGap,
  propMinWidth,
  propMinWidth1,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const year1078Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[9px] text-left text-lg text-black font-montserrat mr-4">
      <h3 className="m-0 relative text-inherit font-bold font-inherit inline-block min-w-[61px] z-[1]">
        {data2}
      </h3>
      <div className="self-stretch flex flex-row items-end justify-between gap-[20px] text-xs text-gray-200 mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start gap-[49px] min-w-[130px] mq450:flex-1">
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <div
              className="flex flex-row items-start justify-start gap-[4px]"
              style={frameDiv1Style}
            >
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div
                  className="relative font-medium inline-block min-w-[60px] z-[1]"
                  style={year1078Style}
                >
                  {year1078}
                </div>
              </div>
              <div className="h-4 flex flex-row items-start justify-start gap-[7px]">
                <div className="h-[17px] w-px relative box-border z-[1] border-r-[1px] border-solid border-gray-200" />
                <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                  <div className="relative font-medium inline-block min-w-[58px] z-[1]">
                    Weapons
                  </div>
                </div>
              </div>
            </div>
            <b
              className="relative text-5xl inline-block text-black min-w-[67px] whitespace-nowrap z-[1] mq450:text-lgi"
              style={bStyle}
            >
              {prop}
            </b>
          </div>
          <div className="relative font-semibold text-black inline-block min-w-[85px] z-[1]">
            {bidsDoFar}
          </div>
        </div>
        <div className="w-[154px] flex flex-col items-end justify-start gap-[45px] text-right">
          <button className="cursor-pointer py-2.5 px-4 bg-[transparent] rounded-3xs flex flex-row items-start justify-start whitespace-nowrap z-[1] border-[1px] border-solid border-deepskyblue hover:bg-cornflowerblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-cornflowerblue-100">
            <div className="h-[37px] w-[120px] relative rounded-3xs box-border hidden border-[1px] border-solid border-deepskyblue" />
            <div className="relative text-sm font-medium font-montserrat text-deepskyblue text-left inline-block min-w-[88px] z-[1]">
              View Details
            </div>
          </button>
          <div className="self-stretch relative font-semibold z-[1]">
            Bidding closes in 12 Days
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
