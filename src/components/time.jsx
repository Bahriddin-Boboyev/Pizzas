import { useContext, useRef } from "react";
import { DataContext } from "../context";
import { useTimer } from "../helpers";

export const TimerComponent = ({ time, repeat }) => {
  const { getSendTypes } = useContext(DataContext);
  const { minutes, remainingSeconds } = useTimer(time, repeat);
  const ref = useRef(false);

  if (!repeat && !ref.current) {
    setTimeout(() => {
      getSendTypes({ msZero: true });
    }, time * 60000);
    ref.current = true;
  }

  return (
    <>
      <span>{`${minutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds}`}</span>{" "}
    </>
  );
};
