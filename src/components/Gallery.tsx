import { AnimatePresence, motion, Variants } from "framer-motion";
import React, { MouseEventHandler, useRef, useState } from "react";
import useOnClickOutside from "../hooks/useOnClickOutside";
import SlideComp, { Direction } from "./animate/SlideComp";

type Photo = {
  url: string;
  alt: string;
};

type DisplayImage = Photo & {
  display: boolean;
};

type GalleryProps = {
  children?: React.ReactElement;
};

const variants: Variants = {
  hidden: {
    // y: "-100vh",
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    // y: 0,
    opacity: 1,
    scale: 1,
    transitionDuration: "100ms",
  },
};

const photoVariants: Variants = {
  ...variants,
  visible: {
    ...variants.visible,
    transitionDelay: "50ms",
  },
};

const Gallery: React.FC<GalleryProps> = (props) => {
  const photoRef = useRef(null);
  const [showModal, setShowModal] = useState<DisplayImage>({
    url: "",
    alt: "",
    display: false,
  });
  const photos: Photo[] = [
    {
      url: "/fotomadacompress/fotoCoupleSilat.jpg",
      alt: "fotoCoupleSilat.jpg",
    },
    {
      url: "/fotomadacompress/fotoCoupleTerang.jpg",
      alt: "fotoCoupleTerang.jpg",
    },
    {
      url: "/fotomadacompress/fotoCoupleLandscape.jpg",
      alt: "fotoCoupleLandscape.jpg",
    },
    {
      url: "/fotomadacompress/fotoCouplegallery.jpg",
      alt: "fotoCouplegallery.jpg",
    },
    {
      url: "/fotomadacompress/fotoCoupleAdat.jpg",
      alt: "fotoCoupleAdat.jpg",
    },
  ];

  const handleShowModal = (photo: Photo = {} as Photo): void => {
    return setShowModal((prevState) => {
      return {
        ...prevState,
        display: !prevState.display,
        url: photo.url,
        alt: photo.alt,
      };
    });
  };

  useOnClickOutside(photoRef, () =>
    setShowModal((state) => {
      return {
        ...state,
        display: false,
      };
    })
  );

  return (
    <>
      <section
        id="gallery"
        className="relative w-full py-10 flex flex-col justify-between items-center bg-primary"
      >
        <div className="w-10/12 flex flex-col gap-7 text-center text-secondary">
          <SlideComp>
            <div className=" font-sans text-5xl">
              <p>Gallery</p>
            </div>
          </SlideComp>
          <div className="w-100 grid gap-2 grid-cols-2">
            {photos.map((photo, idx) => {
              return (
                <>
                  <SlideComp direction={idx % 2 === 0 ? Direction.Right : Direction.Left}>
                    <div
                      className="w-100 border-4 rounded-lg overflow-hidden shadow-sm shadow-secondary"
                      onClick={() => handleShowModal(photo)}
                    >
                      <img src={photo.url} alt={photo.alt} key={idx} />
                    </div>
                  </SlideComp>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <AnimatePresence>
        {showModal.display && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 left-0 z-50 w-full h-full flex justify-center bg-primary bg-opacity-[0.95]"
            // onClick={() => handleShowModal()}
            key={"showGallery"}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="w-10/12 md:w-fit my-auto flex justify-center border-4 rounded-lg overflow-hidden"
              variants={photoVariants}
              initial="hidden"
              animate="visible"
              ref={photoRef}
              exit="hidden"
            >
              <img className="w-full" src={showModal.url} alt={showModal.alt} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
