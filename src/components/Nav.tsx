export default function Nav() {
  return (
    <nav className="flex justify-around items-center">
      <div className="img">
        <img src="/siboria.png" className="w-[100px]"></img>
      </div>
      <div className="gap-3 flex">
        <p className="">Home</p>
        <p>Collections</p>
        <p>How we collect</p>
        <p>Sell an antique</p>
        <p>Blog</p>
      </div>
      <button className="cursor-pointer [border:none] pt-[17.80000000000001px] px-7 pb-[17.899999999999977px] bg-darkorange rounded-3xs flex flex-row items-start justify-start whitespace-nowrap hover:bg-chocolate">
        <div className="h-[53.5px] w-[150px] relative rounded-3xs bg-darkorange hidden" />
        <div className="relative text-xs font-medium font-montserrat text-white text-left inline-block min-w-[94px] z-[1]">
          Our Collections
        </div>
      </button>
    </nav>
  );
}
