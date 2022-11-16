import React from "react";
import SlideComp, { Direction } from "./animate/SlideComp";

type CoupleProps = {
  children?: React.ReactElement;
};

const Couple: React.FC<CoupleProps> = (props) => {
  return (
    <>
      <section
        id="couple"
        className="w-full py-10 flex flex-col justify-between items-center bg-primary text-secondary"
      >
        <div className="w-10/12 flex flex-col items-center gap-7">
          <div className="flex flex-col gap-4 items-center">
            <SlideComp direction={Direction.Left}>
              <div className="relative w-48 overflow-hidden border-4 rounded-lg">
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1724&q=80"
                  alt="photo.png"
                />
              </div>
            </SlideComp>

            <SlideComp direction={Direction.Left}>
              <div className="text-center">Rosnanda Kusumadawati, SKM</div>
              <div className="flex flex-col items-center gap-2">
                <div>
                  <p>
                    <strong>Putri Kedua dari</strong>
                  </p>
                </div>
                <div className="text-center">
                  <div>
                    <p>Bapak Sutaris Nandar</p>
                  </div>
                  <div>
                    <p>Dan</p>
                  </div>
                  <div>
                    <p>Ibu Rusmini Rahayu</p>
                  </div>
                </div>
              </div>
            </SlideComp>
          </div>

          <SlideComp>
            <p className="text-lg">&</p>
          </SlideComp>

          <div className="flex flex-col gap-4 items-center">
            <SlideComp direction={Direction.Right}>
              <div className="relative w-48 overflow-hidden border-4 rounded-lg">
                <img
                  className="h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1724&q=80"
                  alt="photo.png"
                />
              </div>
            </SlideComp>

            <SlideComp direction={Direction.Right}>
              <div className="text-center">Enggar Tri Sintara</div>
              <div className="flex flex-col items-center gap-2">
                <div>
                  <p>
                    <strong>Putra Ketiga dari</strong>
                  </p>
                </div>
                <div className="text-center">
                  <div>
                    <p>Bapak Mochammad Yasintara</p>
                  </div>
                  <div>
                    <p>Dan</p>
                  </div>
                  <div>
                    <p>Ibu Siti Fatimah</p>
                  </div>
                </div>
              </div>
            </SlideComp>
          </div>
        </div>
      </section>
    </>
  );
};

export default Couple;
