import React from 'react'
import { SvgIcon } from '@mui/material'

export default function createSvgIcon(path: string) {
  return <SvgIcon children={path} />
}
