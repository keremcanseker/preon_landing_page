const Footer = () => {
  return (
    <footer className="flex justify-around">
      <img src="/siboria.png" className="w-[100px] h-[25px]"></img>
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
        <div className="flex flex-col items-start justify-start text-black">
          <div className="relative font-medium inline-block">{`Home `}</div>
          <div className="flex flex-row items-start justify-start py-0 px-px">
            <div className="h-1 w-6 relative rounded-xl bg-darkorange z-[1]" />
          </div>
        </div>
        <div className=" font-medium inline-block cursor-pointer hover:underline text-gray-200 ">
          Collections
        </div>
        <div className="font-medium inline-block cursor-pointer hover:underline text-gray-200 ">
          How We Collect
        </div>
        <div className=" font-medium inline-block cursor-pointer hover:underline text-gray-200 ">
          Sell An Antique
        </div>
        <div className="font-medium inline-block cursor-pointer hover:underline text-gray-200 ">
          Blog
        </div>
      </div>
      <div className="w-[150px] flex flex-col items-start justify-start pt-[3px] box-border">
        <img
          className="self-stretch h-[20px] max-w-full overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/group-43.svg"
        />
      </div>
    </footer>
  );
};

export default Footer;
