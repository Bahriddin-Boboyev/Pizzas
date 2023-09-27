import { useState } from "react";

export const useInputValue = (inputValue) => {
  const [value, setValue] = useState(inputValue);

  console.log(inputValue);
  return {
    value,
    change: (e) => setValue({ ...value, [e.target.name]: e.target.value }),
  };
};
