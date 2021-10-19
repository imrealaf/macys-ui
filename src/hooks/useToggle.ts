import { useState } from 'react'

/**
 * useToggle
 * @description utility for controlling visibility of components
 */

export interface IUseToggle {
  id?: string | null
  open: boolean
  show(): void
  hide(): void
  toggle(): void
}

function useToggle(id: string = ''): IUseToggle {
  const [open, setOpen] = useState(false)
  const show = () => setOpen(true)
  const hide = () => setOpen(false)
  const toggle = () => setOpen(!open)

  return {
    id,
    open,
    show,
    hide,
    toggle
  }
}

export default useToggle
