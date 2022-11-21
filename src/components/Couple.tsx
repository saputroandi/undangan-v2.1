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
        className="w-full pt-10 flex flex-col justify-between items-center bg-primary"
      >
        <SlideComp class="w-full">
          <div className="w-full py-10 flex flex-col items-center gap-7 text-primary bg-secondary rounded-t-full">
            <div className="flex flex-col gap-4 items-center">
              <SlideComp direction={Direction.Left}>
                <div className="relative w-48 overflow-hidden border-4 rounded-lg rounded-t-full shadow-md">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="fotomadacompress/fotoMempelaiWanita.jpg"
                    alt="photo.png"
                  />
                </div>
              </SlideComp>

              <SlideComp direction={Direction.Left}>
                <div className="mb-3 text-center text-xl">Rosnanda Kusumadawati</div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-sm">
                    <p>
                      <strong>Putri Kedua dari</strong>
                    </p>
                  </div>
                  <div className="text-center text-sm">
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
                <div className="relative w-48 overflow-hidden border-4 rounded-lg rounded-t-full shadow-md">
                  <img
                    className="h-full w-full object-cover object-center"
                    src="fotomadacompress/fotoMempelaiPria.jpg"
                    alt="photo.png"
                  />
                </div>
              </SlideComp>

              <SlideComp direction={Direction.Right}>
                <div className="mb-3 text-center text-xl">Enggar Tri Sintara</div>
                <div className="flex flex-col items-center gap-2">
                  <div className="text-sm">
                    <p>
                      <strong>Putra Ketiga dari</strong>
                    </p>
                  </div>
                  <div className="text-center text-sm">
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
        </SlideComp>
      </section>
    </>
  );
};

export default Couple;
