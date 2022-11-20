import React from "react";

type BaseProps = {
  children: React.ReactElement;
};

const BaseComponent: React.FC<BaseProps> = (props) => {
  return (
    <>
      <div className="flex justify-center bg-[rgba(0,0,0,0)]">
        <div className="relative w-full flex items-center md:w-3/12 font-serif">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default BaseComponent;
