import React from "react";
import SlideComp, { Direction } from "./animate/SlideComp";

type MapsProps = {
  children?: React.ReactElement;
};

const Maps: React.FC<MapsProps> = (props) => {
  const openInNewTab = (): void => {
    const newWindow = window.open(
      "https://goo.gl/maps/sa4KYgumcW37khhM9",
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };
  return (
    <>
      <section
        id="maps"
        className="w-full py-10 flex flex-col justify-between items-center bg-primary"
      >
        <div className="w-10/12 flex flex-col text-center text-secondary">
          <SlideComp direction={Direction.Up}>
            <div className="mb-7 font-sans text-5xl">
              <p>Lokasi</p>
            </div>
            <div className="w-full h-80 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3036754787063!2d106.81171731438029!3d-6.223630662685389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f156916ef1f3%3A0xc625b3c95951f303!2sGedung%20Balai%20Pertemuan%20Metro%20Jaya%20(BPMJ)%20%2F%20Tifa%20Kemala%20Komdak!5e0!3m2!1sid!2sid!4v1665300892727!5m2!1sid!2sid"
                style={{ border: 0, width: "inherit", height: "inherit" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-100 h-100"
              />
            </div>
          </SlideComp>
          <SlideComp direction={Direction.Down}>
            <div className="mt-7">
              <a
                className="p-3 rounded-lg bg-secondary text-primary font-bold"
                onClick={openInNewTab}
              >
                Buka Di Google Maps
              </a>
            </div>
          </SlideComp>
        </div>
      </section>
    </>
  );
};

export default Maps;
