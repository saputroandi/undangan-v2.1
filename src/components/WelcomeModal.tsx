import { AnimatePresence, motion, Variants } from "framer-motion";
import React from "react";

type WelcomeModalProps = {
  children?: React.ReactElement;
  showWelcomeModal: boolean;
  setShowWelcomeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const variants: Variants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transitionDuration: "500ms",
  },
};

const WelcomeModal: React.FC<WelcomeModalProps> = (props) => {
  const url = window.location.search;
  const params = new URLSearchParams(url).get("to");
  return (
    <>
      <AnimatePresence>
        {props.showWelcomeModal && (
          <motion.section
            className="fixed top-0 left-0 w-full h-full z-10"
            variants={variants}
            initial="visible"
            animate="visible"
            exit="hidden"
          >
            <img
              className="absolute w-full h-full object-cover object-center"
              src="fotomadacompress/fotoCoupleTerang.jpg"
              alt="couple"
            />
            <div className="absolute w-full h-full flex flex-col items-center justify-center bg-gradient-to-t from-primary font-sans">
              <div className="w-10/12 flex flex-col justify-center items-center text-secondary">
                <div className="text-3xl">
                  <h2>The Wedding Of</h2>
                </div>
                <div className="flex gap-2 mt-4 text-5xl">
                  <div className="">
                    <p>Nanda</p>
                  </div>
                  <div>&</div>
                  <div className="">
                    <p>Enggar</p>
                  </div>
                </div>
                <div className="text-center text-sm font-serif">
                  <p>Dear</p>
                </div>
                {params && (
                  <div className="w-10/12 h-24 flex justify-center items-center mt-4 rounded-md bg-white opacity-60 text-primary font-serif">
                    <p>{params}</p>
                  </div>
                )}
                <div className="mt-4 text-center text-xs font-serif">
                  <p>
                    Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Menghadiri
                    Acara Pernikahan Kami.
                  </p>
                </div>
                <div
                  className="p-2 mt-4 rounded-md bg-secondary text-sm text-primary font-bold font-serif"
                  onClick={() => props.setShowWelcomeModal(false)}
                >
                  <p>Buka Undangan</p>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default WelcomeModal;
