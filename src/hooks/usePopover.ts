import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface IUsePopover {
  id: string | undefined;
  anchorEl?: null | Element | ((element: Element) => Element);
  open: boolean;
  show(event: MouseEvent): void;
  hide(): void;
}

function usePopover(id = uuidv4()): IUsePopover {
  const [anchorEl, setAnchorEl] = useState(null);

  const show = (event: MouseEvent) => {
    setAnchorEl(event.currentTarget as any);
  };

  const hide = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return {
    id: open ? id : undefined,
    anchorEl,
    open,
    show,
    hide,
  };
}

export default usePopover;
