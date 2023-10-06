import { useState } from "react";

export const useInputValue = (inputValue) => {
  const [value, setValue] = useState(inputValue);

  return {
    value,
    change: (e) =>
      e === "clear"
        ? setValue("")
        : setValue({ ...value, [e.target.name]: e.target.value }),
  };
};
