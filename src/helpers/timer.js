import { useEffect, useState } from "react";

export const Timer = (time) => {
  const [seconds, setSeconds] = useState(time * 60);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => {
        if (seconds === 0) {
          return time * 60;
        } else {
          return seconds - 1;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return seconds;
};
