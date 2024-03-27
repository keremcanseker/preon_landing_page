import FrameComponent4 from "./FrameComponent4";
export default function Filter() {
  return (
    <div className="h-[120px] w-[1200px] rounded-3xs bg-white shadow-[0px_23px_58px_rgba(0,_0,_0,_0.07)] overflow-x-auto shrink-0 flex flex-row  justify-between pt-7 pb-8 pr-[33px] pl-7 box-border gap-[20px] max-w-full overflow-hidden items-center">
      <div className="h-[120px] w-[1200px] relative rounded-3xs bg-white shadow-[0px_23px_58px_rgba(0,_0,_0,_0.07)] shrink-0 hidden" />
      <FrameComponent4
        location1="Location"
        norway="Norway"
        vuesaxlineararrowDown="/vuesaxlineararrowdown.svg"
      />
      <FrameComponent4
        location1="Religion"
        norway="Asatro"
        vuesaxlineararrowDown="/vuesaxlineararrowdown-1.svg"
        propPadding="0px 14px 0px 0px"
        propWidth="132px"
        propMinWidth="70px"
        propMinWidth1="54px"
      />
      <FrameComponent4
        location1="Year"
        norway="793 AD"
        vuesaxlineararrowDown="/vuesaxlineararrowdown-2.svg"
        propPadding="0px 25px 0px 0px"
        propWidth="132px"
        propMinWidth="37px"
        propMinWidth1="59px"
      />
      <FrameComponent4
        location1="Type"
        norway="Weapons"
        vuesaxlineararrowDown="/vuesaxlineararrowdown-3.svg"
        propPadding="0px 36px 0px 0px"
        propWidth="162px"
        propMinWidth="41px"
        propMinWidth1="78px"
      />
      <button className="cursor-pointer [border:none] py-[18px] px-[30px] bg-gray-300 self-stretch rounded-3xs flex flex-row items-start justify-start gap-[10px] z-[1]">
        <img
          className="h-6 w-6 relative min-h-[24px]"
          alt=""
          src="/vuesaxlinearsearchnormal.svg"
        />
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <div className="relative text-base font-medium font-montserrat text-white text-left inline-block min-w-[56px]">
            Search
          </div>
        </div>
      </button>
    </div>
  );
}
