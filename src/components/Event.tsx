import React from "react";
import SlideComp, { Direction } from "./animate/SlideComp";

type EventProps = {
  children?: React.ReactElement;
};

const Event: React.FC<EventProps> = (props) => {
  return (
		<>
			<section
				id="event"
				className="relative w-full py-10 flex flex-col justify-between items-center bg-primary text-secondary"
			>
				<SlideComp>
					<svg
						id="visual"
						viewBox="0 0 900 600"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						version="1.1"
						className="absolute top-0 left-0"
					>
						<path
							d="M0 72L50 70.8C100 69.7 200 67.3 300 70.3C400 73.3 500 81.7 600 82.5C700 83.3 800 76.7 850 73.3L900 70L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z"
							fill="#000000"
						/>
						<path
							d="M0 63L50 60.7C100 58.3 200 53.7 300 54.2C400 54.7 500 60.3 600 60.8C700 61.3 800 56.7 850 54.3L900 52L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z"
							fill="#777777"
						/>
						<path
							d="M0 25L50 27.2C100 29.3 200 33.7 300 34.5C400 35.3 500 32.7 600 31C700 29.3 800 28.7 850 28.3L900 28L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z"
							fill="#d2d3d5"
						/>
					</svg>
				</SlideComp>
				<div className="relative w-10/12 flex flex-col border-2 rounded-xl z-10">
					<SlideComp>
						<img
							className="absolute w-full h-full -z-10  rounded-xl"
							src="/fotomadacompress/fotoCoupleSilat.jpg"
						/>
						<SlideComp direction={Direction.Up}>
							<div className="p-7 flex flex-col items-center gap-2 text-center rounded-t-xl bg-primary bg-opacity-70">
								<div className="mb-3 font-sans text-3xl">
									<p>Akad Nikah</p>
								</div>
								<div>
									<p>Minggu, 18 Desember 2022</p>
								</div>
								<div>
									<p>08:00 - Selesai WIB</p>
								</div>
								<div className="flex flex-col gap-1 text-sm">
									<p>
										<strong>Gedung Tifa Kemala Bhayangkari Polda Metro Jaya</strong>
									</p>
									<p>
										<strong>Jln. Jend. Sudirman No.55 Jakarta Selatan</strong>
									</p>
								</div>
							</div>
						</SlideComp>
						<SlideComp direction={Direction.Up}>
							<div className="p-9 flex flex-col items-center gap-2 text-center rounded-b-xl bg-primary bg-opacity-70">
								<div className="mb-3 font-sans text-3xl">
									<p>Resepsi</p>
								</div>
								<div>
									<p>Minggu, 18 Desember 2022</p>
								</div>
								<div>
									<p>11:00 - 13:00 WIB</p>
								</div>
								<div className="flex flex-col gap-1 text-sm">
									<p>
										<strong>Gedung Tifa Kemala Bhayangkari Polda Metro Jaya</strong>
									</p>
									<p>
										<strong>Jln. Jend. Sudirman No.55 Jakarta Selatan</strong>
									</p>
								</div>
							</div>
						</SlideComp>
					</SlideComp>
				</div>
			</section>
		</>
	);
};

export default Event;
