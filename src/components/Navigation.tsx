import React from "react";
import SlideComp, { Direction } from "./animate/SlideComp";
import { Link } from "react-scroll";

type NavigationProps = {
  children?: React.ReactElement;
};

const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <>
      <section className="relative w-full md:w-3/12 h-full mx-auto bottom-10 z-30 flex justify-center">
        <div className="fixed w-10/12 md:w-3/12 h-10 py-10 bottom-10 flex justify-around items-center z-50">
          <SlideComp direction={Direction.Left}>
            <Link offset={-25} to="couple" smooth={true} duration={1500}>
              <div className="w-12 h-12 rounded-md bg-primary border hover:border-4 border-secondary">
                <svg
                  className="w-full h-full p-2 fill-transparent stroke-secondary"
                  viewBox="0 0 48 48"
                >
                  <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                    <path d="M23.784 10.372c-5.11-4.56-11.14-6.225-15.526-3.692C2.04 10.27 1.477 20.934 7 30.5c3.63 6.29 8.989 10.538 14 11.69"></path>
                    <path d="M18.258 17.5c-5.523 9.566-4.96 20.23 1.258 23.82s15.736-1.254 21.259-10.82s4.96-20.23-1.259-23.82C33.3 3.09 23.781 7.934 18.258 17.5Z"></path>
                  </g>
                </svg>
              </div>
            </Link>
          </SlideComp>
          <SlideComp direction={Direction.Left}>
            <Link offset={-25} to="event" smooth={true} duration={1500}>
              <div className="w-12 h-12 rounded-md bg-primary border hover:border-4 border-secondary">
                <svg
                  className="w-full h-full p-2 fill-transparent stroke-secondary"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                >
                  <path d="M14.5 18q-1.05 0-1.775-.725Q12 16.55 12 15.5q0-1.05.725-1.775Q13.45 13 14.5 13q1.05 0 1.775.725Q17 14.45 17 15.5q0 1.05-.725 1.775Q15.55 18 14.5 18ZM5 22q-.825 0-1.413-.587Q3 20.825 3 20V6q0-.825.587-1.412Q4.175 4 5 4h1V3q0-.425.287-.713Q6.575 2 7 2t.713.287Q8 2.575 8 3v1h8V3q0-.425.288-.713Q16.575 2 17 2t.712.287Q18 2.575 18 3v1h1q.825 0 1.413.588Q21 5.175 21 6v14q0 .825-.587 1.413Q19.825 22 19 22Zm0-2h14V10H5v10ZM5 8h14V6H5Zm0 0V6v2Z"></path>
                </svg>
              </div>
            </Link>
          </SlideComp>
          <SlideComp direction={Direction.Up}>
            <Link offset={-25} to="maps" smooth={true} duration={1500}>
              <div className="w-12 h-12 rounded-md bg-primary border hover:border-4 border-secondary">
                <svg
                  className="w-full h-full p-2 fill-transparent stroke-secondary"
                  viewBox="0 0 48 48"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="3"
                    strokeLinejoin="round"
                    d="M24 4.5a13.101 13.101 0 0 0-13.101 13.101c0 10.253 10.002 22.591 12.623 25.622a.809.809 0 0 0 1.139.08l.08-.08C27.327 40.18 37.1 27.854 37.1 17.6A13.101 13.101 0 0 0 24 4.5Zm0 16.656a4.443 4.443 0 1 1 4.443-4.443v.011A4.443 4.443 0 0 1 24 21.156Z"
                  ></path>
                </svg>
              </div>
            </Link>
          </SlideComp>
          <SlideComp direction={Direction.Right}>
            <Link offset={-25} to="gallery" smooth={true} duration={1500}>
              <div className="w-12 h-12 rounded-md bg-primary border hover:border-4 border-secondary">
                <svg
                  className="w-full h-full p-2 stroke-gray-700 fill-white"
                  strokeWidth="1"
                  viewBox="0 0 20 20"
                >
                  <path d="M16 4h1.96c.57 0 1.04.47 1.04 1.04v12.92c0 .57-.47 1.04-1.04 1.04H5.04C4.47 19 4 18.53 4 17.96V16H2.04C1.47 16 1 15.53 1 14.96V2.04C1 1.47 1.47 1 2.04 1h12.92c.57 0 1.04.47 1.04 1.04V4zM3 14h11V3H3v11zm5-8.5C8 4.67 7.33 4 6.5 4S5 4.67 5 5.5S5.67 7 6.5 7S8 6.33 8 5.5zm2 4.5s1-5 3-5v8H4V7c2 0 2 3 2 3s.33-2 2-2s2 2 2 2zm7 7V6h-1v8.96c0 .57-.47 1.04-1.04 1.04H6v1h11z"></path>
                </svg>
              </div>
            </Link>
          </SlideComp>
          <SlideComp direction={Direction.Right}>
            <Link offset={-25} to="wishes" smooth={true} duration={1500}>
              <div className="w-12 h-12 rounded-md bg-primary border hover:border-4 border-secondary">
                <svg
                  className="w-full h-full p-2 fill-transparent"
                  viewBox="0 0 36 36"
                  strokeWidth="2"
                >
                  <path
                    className="stroke-secondary"
                    d="M8 19v-8H5a3 3 0 0 0-3 3v18a1 1 0 0 0 .56.89a1 1 0 0 0 1-.1L8.71 29h13.44A2.77 2.77 0 0 0 25 26.13V25H14a6 6 0 0 1-6-6Z"
                  ></path>
                  <path
                    className="stroke-secondary"
                    d="M31 4H14a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h13.55l4.78 3.71a1 1 0 0 0 1 .11a1 1 0 0 0 .57-.9V7A3 3 0 0 0 31 4Z"
                  ></path>
                  <path d="M0 0h36v36H0z"></path>
                </svg>
              </div>
            </Link>
          </SlideComp>
        </div>
      </section>
    </>
  );
};

export default Navigation;
