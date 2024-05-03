import { useEffect, useState } from "react";

export const useScrollFixed = (scroll) => {
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > scroll) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  });

  return fixed;
};
