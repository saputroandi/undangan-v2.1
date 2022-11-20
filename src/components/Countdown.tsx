import { DateTime } from "luxon";
import React, { useState } from "react";
import SlideComp, { Direction } from "./animate/SlideComp";

type CountdownProps = {
  children?: React.ReactElement;
};

const Countdown: React.FC<CountdownProps> = (props) => {
  const [hari, setHari] = useState(0);
  const [jam, setJam] = useState(0);
  const [menit, setMenit] = useState(0);
  const [detik, setDetik] = useState(0);

  const timer = () => {
    const countDate = DateTime.fromFormat(
      "December 18 2022 09:00:00",
      "LLLL dd yyyy HH:mm:ss",
      {
        zone: "Asia/Jakarta",
      }
    );

    const now = DateTime.now().setZone("Asia/Jakarta");
    const gap = countDate.valueOf() - now.valueOf();

    const detik = 1000;
    const menit = detik * 60;
    const jam = menit * 60;
    const hari = jam * 24;

    setHari(Math.floor(gap / hari));
    setJam(Math.floor((gap % hari) / jam));
    setMenit(Math.floor((gap % jam) / menit));
    setDetik(Math.floor((gap % menit) / detik));
  };

  setInterval(() => timer(), 1000);
  return (
    <>
      <section className="relative w-full flex flex-col justify-center bg-primary -z-10 overflow-hidden">
        <div className="absolute top-0 right-[50%] -z-10 w-full h-full origin-bottom animate-waving">
          <img className="w-full h-full" src="/png/gunung.png" alt="gunung" />
        </div>
        <div className="h-96 flex flex-col justify-between items-center mb-20 z-10">
          <div className="w-8/12 h-64 flex flex-col justify-around text-secondary">
            <SlideComp direction={Direction.Right}>
              <div className="self-start w-full font-sans text-7xl text-left">
                <h2>Nanda</h2>
              </div>
            </SlideComp>
            <SlideComp>
              <div className="text-center font-sans text-5xl">
                <h2>&</h2>
              </div>
            </SlideComp>
            <SlideComp direction={Direction.Left}>
              <div className="self-end w-full font-sans text-7xl text-right">
                <h2>Enggar</h2>
              </div>
            </SlideComp>
          </div>
          <SlideComp direction={Direction.Up}>
            <div className="w-[85vw] md:w-[20rem] h-20 flex justify-around items-center rounded-md text-primary border-2 border-primary bg-secondary font-serif">
              <div className="flex flex-col justify-center items-center">
                <div>
                  <p>{hari}</p>
                </div>
                <div>
                  <p>Hari</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div>
                  <p>{jam}</p>
                </div>
                <div>
                  <p>Jam</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div>
                  <p>{menit}</p>
                </div>
                <div>
                  <p>Menit</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div>
                  <p>{detik}</p>
                </div>
                <div>
                  <p>Detik</p>
                </div>
              </div>
            </div>
          </SlideComp>
        </div>
      </section>
    </>
  );
};

export default Countdown;
