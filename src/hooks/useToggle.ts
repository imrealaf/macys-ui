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
  const [open, setActive] = useState(false)
  const show = () => setActive(true)
  const hide = () => setActive(false)
  const toggle = () => setActive(!open)

  return {
    id,
    open,
    show,
    hide,
    toggle
  }
}

export default useToggle
