import React from "react";
import BaseComponent from "./components/BaseComponent";
import Countdown from "./components/Countdown";
import Couple from "./components/Couple";
import Event from "./components/Event";
import Gallery from "./components/Gallery";
import Maps from "./components/Maps";
import Opening from "./components/Opening";
import Protocol from "./components/Protocol";
import Wishes from "./components/Wishes";

type AppProps = {
  children?: React.ReactNode;
};

const App: React.FC = (props: AppProps): React.ReactElement => {
  const components: React.ReactElement[] = [
    <Countdown />,
    <Opening />,
    <Couple />,
    <Event />,
    <Maps />,
    <Gallery />,
    <Wishes />,
    <Protocol />,
  ];

  return (
    <>
      {components.map((component) => {
        return (
          <main>
            <BaseComponent>{component}</BaseComponent>
          </main>
        );
      })}
    </>
  );
};

export default App;
