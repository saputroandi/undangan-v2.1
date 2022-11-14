import React from "react";
import SlideComp, { Direction } from "./animate/SlideComp";

type CountdownProps = {
	children?: React.ReactElement;
};

const Countdown: React.FC<CountdownProps> = (props) => {
	return (
		<>
			<section className="w-full flex flex-col justify-center bg-gray-300">
				<div className="h-96 flex flex-col justify-between items-center mb-20">
					<div className="w-8/12 h-64 flex flex-col items-center justify-around">
						<SlideComp direction={Direction.Left}>
							<div className="w-full text-3xl text-left">
								<h2>fulanah</h2>
							</div>
						</SlideComp>
						<SlideComp>
							<div className="text-xl">
								<h2>&</h2>
							</div>
						</SlideComp>
						<SlideComp direction={Direction.Right}>
							<div className="w-full text-3xl text-right">
								<h2>fulan</h2>
							</div>
						</SlideComp>
					</div>
					<SlideComp direction={Direction.Up}>
						<div className="w-[85vw] md:w-[20rem] h-20 flex justify-around items-center rounded-md text-white bg-gray-700">
							<div className="flex flex-col justify-center items-center">
								<div>
									<p>00</p>
								</div>
								<div>
									<p>Hari</p>
								</div>
							</div>
							<div className="flex flex-col justify-center items-center">
								<div>
									<p>00</p>
								</div>
								<div>
									<p>Jam</p>
								</div>
							</div>
							<div className="flex flex-col justify-center items-center">
								<div>
									<p>00</p>
								</div>
								<div>
									<p>Menit</p>
								</div>
							</div>
							<div className="flex flex-col justify-center items-center">
								<div>
									<p>00</p>
								</div>
								<div>
									<p>Detik</p>
								</div>
							</div>
						</div>
					</SlideComp>
				</div>
			</section>
		</>
	);
};

export default Countdown;
