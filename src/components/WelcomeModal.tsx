import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type WelcomeModalProps = {
	children?: React.ReactElement;
	showWelcomeModal: boolean;
	setShowWelcomeModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const WelcomeModal: React.FC<WelcomeModalProps> = (props) => {
	const url = window.location.search;
	const params = new URLSearchParams(url).get("to");
	return (
		<>
			<AnimatePresence>
				<section className="fixed top-0 left-0 w-full h-full z-10">
					<img
						className="absolute w-full h-full object-cover object-center"
						src="https://images.unsplash.com/photo-1645389411992-e9ec49b158e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
						alt="couple"
					/>
					<div className="absolute w-full h-full flex flex-col items-center justify-center bg-gradient-to-t from-gray-400">
						<div className="w-10/12 flex flex-col justify-center items-center">
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
								<div className="w-10/12 h-24 flex justify-center items-center mt-4 rounded-md bg-white opacity-60">
									<p>{params}</p>
								</div>
							)}
							<div
								className="p-2 mt-4 rounded-md bg-gray-400"
								onClick={() => props.setShowWelcomeModal(false)}
							>
								<p>Buka Undangan</p>
							</div>
						</div>
					</div>
				</section>
			</AnimatePresence>
		</>
	);
};

export default WelcomeModal;
