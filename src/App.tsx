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
import BankModal from "./components/BankModal";
import MusicModal from "./components/MusicModal";

type AppProps = {
	children?: React.ReactNode;
};

const App: React.FC = (props: AppProps): React.ReactElement => {
	const [showModal, setShowModal] = useState<boolean>(true);
	const components: React.ReactElement[] = [
		<BankModal />,
		<MusicModal />,
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
			{components.map((component) => {
				return (
					<main>
						{showModal ? (
							<WelcomeModal
								showWelcomeModal={showModal}
								setShowWelcomeModal={setShowModal}
							/>
						) : (
							<>
								<BaseComponent>{component}</BaseComponent>
								<Navigation />
							</>
						)}
					</main>
				);
			})}
		</>
	);
};

export default App;
