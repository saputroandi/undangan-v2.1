import React from "react";
import SlideComp, { Direction } from "./animate/SlideComp";

type CouplePhotoBottomProps = {
  children?: React.ReactElement;
};

const CouplePhotoBottom: React.FC<CouplePhotoBottomProps> = (props) => {
  return (
    <>
      <section className="w-full h-[80vh] flex flex-col justify-center">
        <div className="relative w-full h-full flex flex-col justify-between items-center overflow-hidden">
          <svg
            id="visual"
            viewBox="0 0 900 600"
            className="absolute top-0 left-0 right-0 w-[120%]"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <path
              className="fill-gray-300"
              d="M0 124L21.5 116.2C43 108.3 86 92.7 128.8 87C171.7 81.3 214.3 85.7 257.2 97.8C300 110 343 130 385.8 143.7C428.7 157.3 471.3 164.7 514.2 156.3C557 148 600 124 642.8 113C685.7 102 728.3 104 771.2 111.8C814 119.7 857 133.3 878.5 140.2L900 147L900 0L878.5 0C857 0 814 0 771.2 0C728.3 0 685.7 0 642.8 0C600 0 557 0 514.2 0C471.3 0 428.7 0 385.8 0C343 0 300 0 257.2 0C214.3 0 171.7 0 128.8 0C86 0 43 0 21.5 0L0 0Z"
              strokeLinecap="round"
              strokeLinejoin="miter"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default CouplePhotoBottom;
