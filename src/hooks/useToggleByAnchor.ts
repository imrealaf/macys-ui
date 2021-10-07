import { useState } from 'react'

/**
 * useToggleByAnchor
 * @description utility for controlling visibility of components that are bound by an anchor element
 */

export interface IUseToggleByAnchor {
  anchorEl?: null | Element | ((element: Element) => Element)
  open: boolean
  show(event: MouseEvent): void
  hide(): void
}

function useToggleByAnchor(): IUseToggleByAnchor {
  const [anchorEl, setAnchorEl] = useState(null)

  const show = (event: MouseEvent) => {
    setAnchorEl(event.currentTarget as any)
  }

  const hide = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return {
    anchorEl,
    open,
    show,
    hide
  }
}

export default useToggleByAnchor
