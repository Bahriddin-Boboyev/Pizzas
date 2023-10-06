import { useState } from "react";
import eyeFill from "../img/eye-fill.svg";
import eyeSlashFill from "../img/eye-slash-fill.svg";

export const usePasswordToggle = (initialVisibility) => {
  const [visible, setVisibility] = useState(initialVisibility);
  const icon = visible ? eyeSlashFill : eyeFill;
  const inputType = visible ? "text" : "password";
  return [icon, inputType, setVisibility];
};
