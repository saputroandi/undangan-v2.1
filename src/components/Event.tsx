import React from "react";
import SlideComp, { Direction } from "./animate/SlideComp";

type EventProps = {
  children?: React.ReactElement;
};

const Event: React.FC<EventProps> = (props) => {
  return (
    <>
      <section
        id="event"
        className="w-full py-10 flex flex-col justify-between items-center bg-primary text-secondary"
      >
        <div className="w-10/12 flex flex-col border-2 rounded-xl">
          <SlideComp direction={Direction.Up}>
            <div className="p-7 flex flex-col items-center gap-2 text-center">
              <div className="mb-3">
                <p>Akad Nikah</p>
              </div>
              <div>
                <p>Minggu, 18 Desember 2022</p>
              </div>
              <div>
                <p>09:00 - Selesai WIB</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p>
                  <strong>Gedung Tifa Kemala Bhayangkari Polda Metro Jaya</strong>
                </p>
                <p>
                  <strong>Jln. Jend. Sudirman No.55 Jakarta Selatan</strong>
                </p>
              </div>
            </div>
          </SlideComp>
          <SlideComp direction={Direction.Up}>
            <div className="p-9 flex flex-col items-center gap-2 text-center">
              <div className="mb-3">
                <p>Resepsi</p>
              </div>
              <div>
                <p>Minggu, 18 Desember 2022</p>
              </div>
              <div>
                <p>11:00 - 13:00 WIB</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p>
                  <strong>Gedung Tifa Kemala Bhayangkari Polda Metro Jaya</strong>
                </p>
                <p>
                  <strong>Jln. Jend. Sudirman No.55 Jakarta Selatan</strong>
                </p>
              </div>
            </div>
          </SlideComp>
        </div>
      </section>
    </>
  );
};

export default Event;
