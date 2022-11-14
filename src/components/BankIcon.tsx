import React from "react";
import SlideComp, { Direction } from "./animate/SlideComp";

type BankIconProps = {
	children?: React.ReactElement;
};

const BankIcon: React.FC<BankIconProps> = (props) => {
	return (
		<>
			<div className="fixed top-[75%] left-[85%] w-12 h-12 z-10">
				<SlideComp>
					<div className="w-full h-full rounded-full bg-gray-700">
						<svg
							className="w-full h-full p-2 fill-white stroke-white"
							viewBox="0 0 256 256"
						>
							<path d="M216 76h-46.2a25.4 25.4 0 0 0 6.3-4.5a28 28 0 1 0-39.6-39.6c-3.6 3.6-6.4 9.2-8.5 16.7c-2.1-7.5-4.9-13.1-8.5-16.7a28 28 0 0 0-39.6 39.6a25.4 25.4 0 0 0 6.3 4.5H40a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h4v68a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12v-68h4a12 12 0 0 0 12-12V88a12 12 0 0 0-12-12Zm-73.9-38.4a20.2 20.2 0 0 1 14.2-5.9a20.1 20.1 0 0 1 14.1 34.2c-7.2 7.2-27.3 9.5-38.3 10c.5-11 2.8-31.1 10-38.3Zm-56.5 0a20 20 0 0 1 28.3 0c7.2 7.2 9.5 27.3 10 38.3c-11-.5-31.1-2.8-38.3-10a20 20 0 0 1 0-28.3ZM36 120V88a4 4 0 0 1 4-4h84v40H40a4 4 0 0 1-4-4Zm16 80v-68h72v72H56a4 4 0 0 1-4-4Zm152 0a4 4 0 0 1-4 4h-68v-72h72Zm16-80a4 4 0 0 1-4 4h-84V84h84a4 4 0 0 1 4 4Z"></path>
						</svg>
					</div>
				</SlideComp>
			</div>
		</>
	);
};

export default BankIcon;
