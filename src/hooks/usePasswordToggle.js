import { useState } from "react";
import eyeFill from "../img/eye-fill.svg";
import eyeSlashFill from "../img/eye-slash-fill.svg";

export const usePasswordToggle = () => {
  const [visible, setVisibility] = useState({ itemName: "", show: false });
  const icon = visible.show ? eyeSlashFill : eyeFill;
  const inputType = visible.show ? "text" : "password";

  return [icon, visible, inputType, setVisibility];
};
