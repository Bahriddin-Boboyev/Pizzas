import { useEffect, useState } from "react";

const useScrollFixed = (scroll) => {
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

export default useScrollFixed;
