import React from "react";
import SlideComp from "./animate/SlideComp";

type ProtocolProps = {
  children?: React.ReactElement;
};

const Protocol: React.FC<ProtocolProps> = (props) => {
  return (
    <>
      <section className="w-full h-full bg-primary text-secondary">
        <SlideComp class="w-full py-10 flex flex-col justify-between items-center">
          <div className="w-10/12 flex flex-col text-justify gap-7">
            <div className="text-center">
              <p>Covid-19 Prevention</p>
            </div>
            <div className="text-center text-sm">
              <p>
                Jangan ragu untuk datang, kami sudah berkoordinasi dengan pihak lain untuk
                mencegah penularan COVID-19. Acara kami akan mengikuti segala prosedur
                protokol kesehatan untuk mencegah penularan COVID-19. So don't be panic,
                we look forward to seeing you there!
              </p>
            </div>
          </div>
        </SlideComp>
      </section>
    </>
  );
};

export default Protocol;
