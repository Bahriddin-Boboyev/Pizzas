import { useEffect, useState } from "react";

export const useTimer = (time, repeat) => {
  const [seconds, setSeconds] = useState(time * 60);
  const [minutes, setMinutes] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => {
        if (repeat) {
          if (seconds === 0) {
            return time * 60;
          } else {
            const newSeconds = seconds - 1;
            setMinutes(Math.floor(newSeconds / 60));
            setRemainingSeconds(newSeconds % 60);
            return newSeconds;
          }
        } else {
          if (seconds === 0) {
            return seconds;
          } else {
            const newSeconds = seconds - 1;
            setMinutes(Math.floor(newSeconds / 60));
            setRemainingSeconds(newSeconds % 60);
            return newSeconds;
          }
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return { minutes, remainingSeconds };
};
