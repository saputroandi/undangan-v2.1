import React, { useState } from "react";
import BaseComponent from "./components/BaseComponent";
import Countdown from "./components/Countdown";
import Couple from "./components/Couple";
import CouplePhoto from "./components/CouplePhoto";
import CouplePhotoBottom from "./components/CouplePhotoBottom";
import Event from "./components/Event";
import Gallery from "./components/Gallery";
import Maps from "./components/Maps";
import WelcomeModal from "./components/WelcomeModal";
import Navigation from "./components/Navigation";
import Opening from "./components/Opening";
import Protocol from "./components/Protocol";
import Wishes from "./components/Wishes";
import BankIcon from "./components/BankIcon";
import MusicIcon from "./components/MusicIcon";
import { useScroll } from "framer-motion";

type AppProps = {
  children?: React.ReactNode;
};

const App: React.FC = (props: AppProps): React.ReactElement => {
  const [showWelcomeModal, setShowWelcomeModal] = useState<boolean>(true);
  const [showNavigation, setShowNavigation] = useState<boolean>(false);
  const { scrollY } = useScroll();

  React.useEffect(() => {
    return scrollY.onChange((latest) => {
      if (latest >= 390) {
        setShowNavigation(true);
      } else {
        setShowNavigation(false);
      }
    });
  }, []);

  const components: React.ReactElement[] = [
    <BankIcon />,
    <MusicIcon />,
    <CouplePhoto />,
    <Countdown />,
    <Opening />,
    <Couple />,
    <Event />,
    <Maps />,
    <Gallery />,
    <Wishes />,
    <Protocol />,
    <CouplePhotoBottom />,
  ];

  return (
    <>
      <WelcomeModal
        showWelcomeModal={showWelcomeModal}
        setShowWelcomeModal={setShowWelcomeModal}
        key={"welcomemodal"}
      />

      {!showWelcomeModal &&
        components.map((component, idx) => {
          return (
            <main>
              <>
                <BaseComponent key={idx}>{component}</BaseComponent>
              </>
            </main>
          );
        })}
      {showNavigation && <Navigation key={"navigationKey"} />}
    </>
  );
};

export default App;
