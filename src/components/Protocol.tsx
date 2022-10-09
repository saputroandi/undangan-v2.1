import React from "react";

type ProtocolProps = {
  children?: React.ReactElement;
};

const Protocol: React.FC<ProtocolProps> = (props) => {
  return (
    <>
      <section className="w-full py-10 flex flex-col justify-between items-center">
        <div className="w-10/12 flex flex-col text-justify gap-7">
          <div className="text-center">
            <p>Covid-19 Prevention</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              eveniet voluptates quam nisi obcaecati est hic, commodi
              necessitatibus vel deleniti!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Protocol;
