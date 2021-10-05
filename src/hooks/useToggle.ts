import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface IUseToggle {
  id?: string | null;
  open: boolean;
  show(): void;
  hide(): void;
  toggle(): void;
}

function useToggle(id: string = uuidv4()): IUseToggle {
  const [open, setActive] = useState(false);
  const show = () => setActive(true);
  const hide = () => setActive(false);
  const toggle = () => setActive(!open);

  return {
    id,
    open,
    show,
    hide,
    toggle,
  };
}

export default useToggle;
