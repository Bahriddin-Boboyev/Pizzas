import { useState } from 'react';
import { Icons } from '@/img';

export const usePasswordToggle = (initialVisibility) => {
  const [visible, setVisibility] = useState(initialVisibility);
  const icon = visible ? Icons.eyeSlashFill : Icons.eyeFill;
  const inputType = visible ? 'text' : 'password';
  return [icon, inputType, setVisibility];
};
