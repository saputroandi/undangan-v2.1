import React, { MouseEventHandler, useState } from "react";
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

const Gallery: React.FC<GalleryProps> = (props) => {
  const [showModal, SetShowModal] = useState<DisplayImage>({
    url: "",
    alt: "",
    display: false,
  });
  const photos: Photo[] = [
    {
      url: "https://images.unsplash.com/photo-1532383911524-17cd3daf08cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      alt: "gallery-photo.png",
    },
    {
      url: "https://images.unsplash.com/photo-1532383911524-17cd3daf08cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      alt: "gallery-photo.png",
    },
    {
      url: "https://images.unsplash.com/photo-1532383911524-17cd3daf08cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      alt: "gallery-photo.png",
    },
    {
      url: "https://images.unsplash.com/photo-1532383911524-17cd3daf08cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      alt: "gallery-photo.png",
    },
    {
      url: "https://images.unsplash.com/photo-1532383911524-17cd3daf08cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      alt: "gallery-photo.png",
    },
  ];

  const handleShowModal = (photo: Photo = {} as Photo): void => {
    return SetShowModal((prevState) => {
      return {
        ...prevState,
        display: !prevState.display,
        url: photo.url,
        alt: photo.alt,
      };
    });
  };

  return (
    <>
      <section className="relative w-full py-10 flex flex-col justify-between items-center bg-gray-300">
        <div className="w-10/12 flex flex-col gap-7 text-center">
          <SlideComp>
            <div>
              <p>Gallery</p>
            </div>
          </SlideComp>
          <div className="w-100 grid gap-2 grid-cols-2">
            {photos.map((photo, idx) => {
              return (
                <>
                  <SlideComp
                    direction={idx % 2 === 0 ? Direction.Right : Direction.Left}
                  >
                    <div
                      className="w-100 border-4 rounded-lg overflow-hidden"
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
      {showModal.display && (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 z-10 w-full h-full flex justify-center bg-slate-700"
          onClick={() => handleShowModal()}
        >
          <div className="w-10/12 md:w-fit my-auto flex justify-center border-4 rounded-lg overflow-hidden">
            <img className="w-full" src={showModal.url} alt={showModal.alt} />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
