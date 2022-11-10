import { AnimatePresence, motion } from "framer-motion";
import React from "react";

type ModalProps = {
	children?: React.ReactElement;
};

const Modal: React.FC<ModalProps> = (props) => {
	const url = window.location.search;
	const params = new URLSearchParams(url).get("to");
	return (
		<>
			<AnimatePresence>
				<section className="fixed top-0 left-0 w-full h-full z-10">
					<div className="absolute w-full h-full flex flex-col items-center justify-center bg-[url('https://images.unsplash.com/photo-1645389411992-e9ec49b158e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80')] bg-center bg-no-repeat bg-cover">
						<div className="w-10/12 flex flex-col justify-center items-center bg-red-400">
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
								<div className="w-10/12 h-16 flex justify-center items-center bg-white opacity-60">
									<p>{params}</p>
								</div>
							)}
						</div>
					</div>
					<div className="absolute w-full h-full mix-blend-lighten bg-gradient-to-t from-gray-400"></div>
				</section>
			</AnimatePresence>
		</>
	);
};

export default Modal;
