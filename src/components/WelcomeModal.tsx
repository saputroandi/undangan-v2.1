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
		transitionDuration: "200ms",
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
							src="https://images.unsplash.com/photo-1645389411992-e9ec49b158e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
							alt="couple"
						/>
						<div className="absolute w-full h-full flex flex-col items-center justify-center bg-gradient-to-t from-primary">
							<div className="w-10/12 flex flex-col justify-center items-center text-secondary">
								<div className="">
									<p>The Wedding</p>
								</div>
								<div className="flex gap-2 mt-4">
									<div className="">
										<p>Fulanah</p>
									</div>
									<div>&</div>
									<div className="">
										<p>Fulan</p>
									</div>
								</div>
								{params && (
									<div className="w-10/12 h-24 flex justify-center items-center mt-4 rounded-md bg-white opacity-60 text-primary">
										<p>{params}</p>
									</div>
								)}
								<div
									className="p-2 mt-4 rounded-md bg-secondary text-primary font-bold"
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
