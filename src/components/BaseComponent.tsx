import React from "react";

type BaseProps = {
  children: React.ReactElement;
};

const BaseComponent: React.FC<BaseProps> = (props) => {
  return (
    <>
      <div className="flex justify-center bg-blue-400">
        <div className="relative w-full flex items-center md:w-3/12 bg-gray-400">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default BaseComponent;
