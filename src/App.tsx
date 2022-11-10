import React from "react";
import BaseComponent from "./components/BaseComponent";
import Countdown from "./components/Countdown";
import Couple from "./components/Couple";
import CouplePhoto from "./components/CouplePhoto";
import CouplePhotoBottom from "./components/CouplePhotoBottom";
import Event from "./components/Event";
import Gallery from "./components/Gallery";
import Maps from "./components/Maps";
import Modal from "./components/Modal";
import Opening from "./components/Opening";
import Protocol from "./components/Protocol";
import Wishes from "./components/Wishes";

type AppProps = {
	children?: React.ReactNode;
};

const App: React.FC = (props: AppProps): React.ReactElement => {
	const components: React.ReactElement[] = [
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
		<Modal />,
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
