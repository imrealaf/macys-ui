import { useState } from 'react'

/**
 * useAccordion
 * @description utility for controlling the state of an accordion
 */

export interface IUseAccordion {
  expanded: string | false
  toggle(id: string): void
}

function useAccordion(initial: string | false): IUseAccordion {
  const [expanded, setExpanded] = useState(initial)
  const toggle =
    (id: string) => (event: React.SyntheticEvent, isExpanded: boolean) =>
      setExpanded(isExpanded ? id : false)

  return {
    expanded,
    toggle
  }
}

export default useAccordion
