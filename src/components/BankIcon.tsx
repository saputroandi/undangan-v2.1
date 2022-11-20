import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { DateTime } from "luxon";
import useOnClickOutside from "../hooks/useOnClickOutside";
import SlideComp, { Direction } from "./animate/SlideComp";

type BankIconProps = {
  children?: React.ReactElement;
};

const variants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transitionDuration: "100ms",
  },
};

const bankVariants: Variants = {
  ...variants,
  visible: {
    ...variants.visible,
    transitionDelay: "50ms",
  },
};

const BankIcon: React.FC<BankIconProps> = (props) => {
  const bankModal = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const bankArr = {
    BCA: "8660182421",
    mandiri: "1180009914325",
  } as { [key: string]: string };

  const handleCopy = (bankName: string) => {
    navigator.clipboard.writeText(bankArr[bankName]);
    setCopied(true);
    setTimeout(() => {
      setShowModal(false);
      setCopied(false);
    }, 300);
  };

  useOnClickOutside(bankModal, () => setShowModal(false));

  return (
    <>
      <AnimatePresence>
        <div key={"bankIcon"} className="fixed top-[75%] left-[85%] w-10 h-10 z-50">
          <SlideComp>
            <div
              className="w-full h-full rounded-md bg-primary border-2 border-secondary animate-wiggle"
              onClick={() => setShowModal(true)}
            >
              <svg
                className="w-full h-full p-2 fill-secondary stroke-secondary"
                viewBox="0 0 256 256"
              >
                <path d="M216 76h-46.2a25.4 25.4 0 0 0 6.3-4.5a28 28 0 1 0-39.6-39.6c-3.6 3.6-6.4 9.2-8.5 16.7c-2.1-7.5-4.9-13.1-8.5-16.7a28 28 0 0 0-39.6 39.6a25.4 25.4 0 0 0 6.3 4.5H40a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h4v68a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-68h4a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12Zm-73.9-38.4a20.2 20.2 0 0 1 14.2-5.9a20.1 20.1 0 0 1 14.1 34.2c-7.2 7.2-27.3 9.5-38.3 10c.5-11 2.8-31.1 10-38.3Zm-56.5 0a20 20 0 0 1 28.3 0c7.2 7.2 9.5 27.3 10 38.3c-11-.5-31.1-2.8-38.3-10a20 20 0 0 1 0-28.3ZM36 120V88a4 4 0 0 1 4-4h84v40H40a4 4 0 0 1-4-4Zm16 80v-68h72v72H56a4 4 0 0 1-4-4Zm152 0a4 4 0 0 1-4 4h-68v-72h72Zm16-80a4 4 0 0 1-4 4h-84V84h84a4 4 0 0 1 4 4Z"></path>
              </svg>
            </div>
          </SlideComp>
        </div>
        {showModal && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 left-0 z-50 w-full h-full flex justify-center items-center bg-primary bg-opacity-[0.95]"
            key={"bankModal"}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              variants={bankVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              ref={bankModal}
              className="w-[90%] flex flex-col justify-center items-center p-2 rounded-lg border bg-secondary border-white gap-2 text-center text-primary text-sm"
            >
              <div className="text-4xl font-sans">
                <p>Love Gift</p>
              </div>
              <div className="text-xs">
                <p>
                  Tanpa mengurangi rasa hormat, bagi anda yang ingin memberikan tanda
                  kasih untuk kami, dapat melalui:
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="h-24">
                  <img className="h-full" src="/png/BCA.png" alt="BCA" />
                </div>
                <div className="">
                  <p>Rosnanda Kusumadawati</p>
                </div>
                <div className="text-base">
                  <p>8660182421</p>
                </div>
                <div
                  className="p-2 rounded-md bg-primary text-secondary"
                  onClick={() => handleCopy("BCA")}
                >
                  {!copied ? <p>Salin Rekening</p> : <p>Tersalin</p>}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-3">
                <div className="h-24">
                  <img className="h-full" src="/png/mandiri.png" alt="BCA" />
                </div>
                <div className="">
                  <p>Rosnanda Kusumadawati</p>
                </div>
                <div className="text-base">
                  <p>1180009914325</p>
                </div>
                <div
                  className="p-2 rounded-md bg-primary text-secondary"
                  onClick={() => handleCopy("mandiri")}
                >
                  {!copied ? <p>Salin Rekening</p> : <p>Tersalin</p>}
                </div>
              </div>
              <div className="">
                <p>Terimakasih</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BankIcon;
