import React from "react";
import SlideComp, { Direction } from "./animate/SlideComp";

type OpeningProps = {
  children?: React.ReactElement;
};

const Opening: React.FC<OpeningProps> = (props) => {
  return (
    <>
      <section className="w-full py-10 flex flex-col justify-between items-center bg-primary text-secondary">
        <div className="w-10/12 flex flex-col text-justify gap-7">
          <SlideComp direction={Direction.Up}>
            <div className="w-64 mx-auto mb-3">
              <img className="w-full h-full" src="/png/basmallah.png" alt="basmallah" />
            </div>
            <div className="text-sm">
              <p>
                “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
                pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan
                merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
                sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda
                (kebesaran Allah) bagi kaum yang berpikir.”{" "}
                <strong>(QS. Ar-Rum: 21)</strong>
              </p>
            </div>
          </SlideComp>
        </div>
      </section>
    </>
  );
};

export default Opening;
