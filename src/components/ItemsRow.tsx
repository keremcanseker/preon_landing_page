import FrameComponent2 from "./FrameComponent2";
export default function ItemsRow() {
  const data = [
    {
      data2: "Chair",
      year1078: "Year: 1192",
      prop: "$ 895.50",
      bidsDoFar: "12 bids do far.",
      propGap: "8px",
      propMinWidth: "56px",
      propMinWidth1: "105px",
      imgSrc: "./chair.png",
    },
    {
      data2: "Table",
      year1078: "Year: 1078",
      prop: "$ 759",
      bidsDoFar: "14 bids do far.",
      propGap: "8px",
      propMinWidth: "56px",
      propMinWidth1: "105px",
      imgSrc: "/table.png",
    },
    {
      data2: "Skull",
      year1078: "Year: 1256",
      prop: "$ 999",
      bidsDoFar: "16 bids do far.",
      propGap: "8px",
      propMinWidth: "56px",
      propMinWidth1: "105px",
      imgSrc: "/skullpngimage-1@2x.png",
    },
    {
      data2: "Table",
      year1078: "Year: 1078",
      prop: "$ 759",
      bidsDoFar: "14 bids do far.",
      propGap: "8px",
      propMinWidth: "56px",
      propMinWidth1: "105px",
      imgSrc: "/table.png",
    },
    {
      data2: "Chair",
      year1078: "Year: 1192",
      prop: "$ 895.50",
      bidsDoFar: "12 bids do far.",
      propGap: "8px",
      propMinWidth: "56px",
      propMinWidth1: "105px",
      imgSrc: "/chair.png",
    },
    {
      data2: "Skull",
      year1078: "Year: 1256",
      prop: "$ 999",
      bidsDoFar: "16 bids do far.",
      propGap: "8px",
      propMinWidth: "56px",
      propMinWidth1: "105px",
      imgSrc: "/skullpngimage-1@2x.png",
    },
  ];

  return (
    <>
      <div className="my-[3rem]">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
          <h1 className="m-0 relative  inline-block max-w-full font-bold text-20xl">
            Recently Added
          </h1>
          <div className="h-[58px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border cursor-pointer">
            <div className=" flex-1 flex flex-row items-start justify-start gap-[15px]">
              <img
                className="h-[50px] w-[50px] carousel-prev relative min-h-[50px]"
                loading="lazy"
                alt=""
                src="/group-23.svg"
              />
              <div className="h-[50px] w-[50px] relative min-h-[50px] flex items-center justify-center cursor-pointer">
                <img
                  className="h-[45px] w-[50px] carousel-next  object-contain absolute left-[0px] top-[10px] [transform:scale(1.36)]"
                  loading="lazy"
                  alt=""
                  src="/group-24-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-3 overflow-hidden">
        {data.map((item, index) => {
          return (
            <div className="carousel transition-transform ease-in duration-100 w-[380px] rounded-3xs bg-white shadow-[0px_14px_33px_rgba(0,_0,_0,_0.08)] flex flex-col items-start justify-start pt-[15px] px-[15px] pb-5 box-border gap-[20px] max-w-full z-[3]">
              {/* <div className="w-[380px] h-[397px] relative rounded-3xs  shadow-[0px_14px_33px_rgba(0,_0,_0,_0.08)] hidden max-w-full" /> */}
              <div className="carousel-item self-stretch h-[178px] rounded-4xs bg-gray-100 flex flex-row items-start justify-center py-6 px-5 box-border max-w-full z-[1]">
                {/* <img
                  className="h-[178px] w-[350px] relative rounded-4xs hidden max-w-full"
                  alt=""
                  src="/rectangle-12.svg"
                /> */}
                <img
                  className="h-[130px] w-[84.3px] relative object-cover z-[4]"
                  loading="lazy"
                  alt=""
                  src={item.imgSrc}
                />
              </div>

              <FrameComponent2
                key={index}
                data2={item.data2}
                year1078={item.year1078}
                prop={item.prop}
                bidsDoFar={item.bidsDoFar}
                propGap={item.propGap}
                propMinWidth={item.propMinWidth}
                propMinWidth1={item.propMinWidth1}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
