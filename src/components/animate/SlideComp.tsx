import { useInView } from "framer-motion";
import React from "react";

export enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

type Props = {
  direction?: Direction;
  children: React.ReactElement | React.ReactElement[];
  class?: string;
};

export default function SlideComp(props: Props) {
  const refComp: React.LegacyRef<HTMLDivElement> = React.useRef(null);

  const isInView = useInView(refComp);

  let translateValue: string;

  switch (props.direction) {
    case Direction.Left:
      translateValue = "translateX(-70px)";
      break;
    case Direction.Right:
      translateValue = "translateX(70px)";
      break;
    case Direction.Down:
      translateValue = "translateY(-70px)";
      break;
    case Direction.Up:
      translateValue = "translateY(70px)";
      break;
    default:
      translateValue = "";
      break;
  }
  return (
    <div
      style={{
        transform: isInView ? "none" : translateValue,
        opacity: isInView ? 1 : 0,
        transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      ref={refComp}
      className={props.class}
    >
      {props.children}
    </div>
  );
}
