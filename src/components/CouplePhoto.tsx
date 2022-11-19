import { motion, Variants } from "framer-motion";
import React from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import SlideComp, { Direction } from "./animate/SlideComp";

type CouplePhotoProps = {
  children?: React.ReactElement;
};

const CouplePhoto: React.FC<CouplePhotoProps> = (props) => {
  const particlesInit = React.useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  return (
    <>
      <section className="w-full h-[80vh] flex flex-col justify-center">
        <div className="relative w-full h-full flex flex-col justify-between items-center overflow-hidden">
          <img
            className="absolute w-full h-full -z-20 object-center object-cover"
            src="/fotomadacompress/fotoCoupleAdat.jpg"
            alt="couple-holding-hand"
          />
          <div className="absolute top-0 left-0 w-full h-full -z-10 object-cover object-bottom">
            <Particles
              className="absolute top-0 left-0 w-full h-full"
              init={particlesInit}
              options={{
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#ffffff",
                  },
                  collisions: {
                    enable: true,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 150,
                  },
                  opacity: {
                    animation: {
                      startValue: "random",
                      enable: true,
                      minimumValue: 0.2,
                      speed: 0.5,
                    },
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 1, max: 3 },
                  },
                },
                detectRetina: true,
              }}
            />
          </div>
          <svg
            id="visual"
            viewBox="0 0 900 600"
            className="absolute bottom-0 left-0 right-0 w-[120%]"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <path
              d="M0 474L21.5 481.8C43 489.7 86 505.3 128.8 511C171.7 516.7 214.3 512.3 257.2 500.2C300 488 343 468 385.8 454.3C428.7 440.7 471.3 433.3 514.2 441.7C557 450 600 474 642.8 485C685.7 496 728.3 494 771.2 486.2C814 478.3 857 464.7 878.5 457.8L900 451L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
              className="fill-primary"
              strokeLinecap="round"
              strokeLinejoin="miter"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default CouplePhoto;
