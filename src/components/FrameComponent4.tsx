import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { useState } from "react";
export type FrameComponent4Type = {
  location1?: string;
  norway?: string;
  vuesaxlineararrowDown?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  location1,
  norway,
  vuesaxlineararrowDown,
  propPadding,
  propWidth,
  propMinWidth,
  propMinWidth1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
    };
  }, [propPadding, propWidth]);

  const [hidden, setHidden] = useState("hidden");

  const locationStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const norwayStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const handleDropdown = () => {
    if (hidden === "hidden") {
      setHidden("");
    } else {
      setHidden("hidden");
    }
  };

  return (
    <div
      className="w-[131px] shrink-0 flex flex-col items-start justify-start gap-[20px] text-left text-base text-black font-montserrat"
      style={frameDivStyle}
    >
      <b
        className="relative inline-block min-w-[73px] z-[1]"
        style={locationStyle}
      >
        {location1}
      </b>
      <div
        className="self-stretch flex flex-row items-start justify-between gap-[20px] text-gray-200 hover:cursor-pointer"
        onClick={handleDropdown}
      >
        <div
          className="relative font-semibold inline-block min-w-[64px] z-[1]"
          style={norwayStyle}
        >
          {norway}
        </div>

        <div
          id="dropdown"
          className={`z-10 absolute  bg-white divide-y divide-gray-100 rounded-xl shadow w-36  ${hidden}`}
        >
          <ul
            className="py-2  text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a className="block px-4 py-2 hover:bg-gray-100 rounded-lg">
                Dashboard
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 hover:bg-gray-100 rounded-lg">
                Settings
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 hover:bg-gray-100 rounded-lg ">
                Earnings
              </a>
            </li>
            <li>
              <a className="block px-4 py-2 hover:bg-gray-100 rounded-lg ">
                Sign out
              </a>
            </li>
          </ul>
        </div>

        <div className="h-4 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
          <img
            className="w-3 h-3 relative z-[1]"
            alt=""
            src={vuesaxlineararrowDown}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
