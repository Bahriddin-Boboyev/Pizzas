import { useEffect, useContext } from "react";
// import { DataContext } from "../context";
import { useTimer } from "../helpers";

export const TimerComponent = ({ time, repeat }) => {
  // const { context, getSendTypes } = useContext(DataContext);
  const { minutes, remainingSeconds } = useTimer(time, repeat);
  return (
    <>
      <span>{`${minutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds}`}</span>{" "}
    </>
  );
};
