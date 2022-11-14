import { motion, Variants } from "framer-motion";
import React from "react";
import SlideComp, { Direction } from "./animate/SlideComp";

type CouplePhotoProps = {
	children?: React.ReactElement;
};

const variants: Variants = {};

const CouplePhoto: React.FC<CouplePhotoProps> = (props) => {
	return (
		<>
			<section className="w-full h-[80vh] flex flex-col justify-center">
				<div className="relative w-full h-full flex flex-col justify-between items-center overflow-hidden">
					<img
						className="absolute w-full h-full -z-10 object-cover object-bottom"
						src="https://images.unsplash.com/photo-1506014299253-3725319c0f69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
						alt="couple-holding-hand"
					/>
					<motion.svg
						id="visual"
						viewBox="0 0 900 600"
						className="absolute bottom-0 left-0 right-0 w-[120%]"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						version="1.1"
					>
						<path
							d="M0 474L21.5 481.8C43 489.7 86 505.3 128.8 511C171.7 516.7 214.3 512.3 257.2 500.2C300 488 343 468 385.8 454.3C428.7 440.7 471.3 433.3 514.2 441.7C557 450 600 474 642.8 485C685.7 496 728.3 494 771.2 486.2C814 478.3 857 464.7 878.5 457.8L900 451L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z"
							className="fill-gray-300"
							strokeLinecap="round"
							strokeLinejoin="miter"
						/>
					</motion.svg>
				</div>
			</section>
		</>
	);
};

export default CouplePhoto;
