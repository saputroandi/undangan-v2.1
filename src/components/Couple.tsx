import React from "react";

type CoupleProps = {
  children?: React.ReactElement;
};

const Couple: React.FC<CoupleProps> = (props) => {
  return (
    <>
      <section className="w-full py-10 flex flex-col justify-between items-center">
        <div className="w-10/12 flex flex-col items-center gap-7">
          <div className="flex flex-col gap-4 items-center">
            <div className="relative w-48 overflow-hidden border-4 rounded-lg">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1724&q=80"
                alt="photo.png"
              />
            </div>
            <div>Fulan</div>
            <div className="flex flex-col items-center gap-2">
              <div>
                <p>
                  <strong>Putri pertama dari</strong>
                </p>
              </div>
              <div className="text-center">
                <div>
                  <p>Bapak Fulan</p>
                </div>
                <div>
                  <p>Dan</p>
                </div>
                <div>
                  <p>Ibu Fulanah</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="relative w-48 overflow-hidden border-4 rounded-lg">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1724&q=80"
                alt="photo.png"
              />
            </div>
            <div>Fulan</div>
            <div className="flex flex-col items-center gap-2">
              <div>
                <p>
                  <strong>Putri pertama dari</strong>
                </p>
              </div>
              <div className="text-center">
                <div>
                  <p>Bapak Fulan</p>
                </div>
                <div>
                  <p>Dan</p>
                </div>
                <div>
                  <p>Ibu Fulanah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Couple;
