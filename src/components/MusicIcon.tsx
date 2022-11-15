import React, { useState } from "react";
import SlideComp, { Direction } from "./animate/SlideComp";

type MusicIconProps = {
  children?: React.ReactElement;
};

const MusicIcon: React.FC<MusicIconProps> = (props) => {
  const [play, setPlay] = useState(true);
  return (
    <>
      <div className="fixed top-[67%] left-[85%] w-10 h-10 z-10">
        <SlideComp>
          {play && (
            <div
              className="w-full h-full rounded-full bg-secondary"
              onClick={() => setPlay(false)}
            >
              <svg
                className="w-full h-full p-2 fill-transparent stroke-primary"
                viewBox="0 0 16 16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M1.75 5.75v4.5h2.5l4 3V2.75l-4 3zm9 .5s1 .5 1 1.75s-1 1.75-1 1.75m1-6.5c2 1 3 2.5 3 4.75s-1 3.75-3 4.75"
                ></path>
              </svg>
            </div>
          )}
          {!play && (
            <div
              className="w-full h-full rounded-full bg-secondary"
              onClick={() => setPlay(true)}
            >
              <svg
                className="w-full h-full p-2 fill-transparent stroke-primary"
                viewBox="0 0 16 16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M1.75 5.75v4.5h2.5l4 3V2.75l-4 3zm12.5 0l-3.5 4.5m0-4.5l3.5 4.5"
                ></path>
              </svg>
            </div>
          )}
        </SlideComp>
      </div>
    </>
  );
};

export default MusicIcon;

{
  /* <svg width="1em" height="1em" viewBox="0 0 16 16"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1.75 5.75v4.5h2.5l4 3V2.75l-4 3zm12.5 0l-3.5 4.5m0-4.5l3.5 4.5"></path></svg> */
}
