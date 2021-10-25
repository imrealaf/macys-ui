import React from 'react'
import { Radio, RadioProps } from '@mui/material'
import { styled } from '@mui/system'

export interface ISelectionTileProps extends RadioProps {
  label?: string
  sublabel?: string
}

const StyledRadio = styled(Radio)<ISelectionTileProps>(
  ({ label, sublabel, theme }) => ({
    borderRadius: '5px',
    border: `1px solid ${theme.palette.gray2.main}`,
    padding: `${theme.spacing(0)} ${theme.spacing(2)}`,
    height: '48px',
    margin: '4px',
    color: theme.palette.text.primary,
    boxShadow: '0 0 0 1px rgba(0,0,0,0)',
    // Checked
    '&.Mui-checked': {
      borderColor: theme.palette.common.black,
      boxShadow: '0 0 0 1px rgba(0,0,0,1)'
    },
    // Disabled
    '&.Mui-disabled': {
      backgroundColor: theme.palette.gray7.main,
      color: theme.palette.gray1.main
    },
    // Label
    '& > span': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      lineHeight: 1,
      '&::before': {
        content: `"${label}"`
      },
      '& svg': {
        display: 'none'
      },
      ...(sublabel && {
        '&::after': {
          content: `"${sublabel}"`,
          fontSize: '12px',
          color: theme.palette.gray1.main,
          marginTop: '4px'
        }
      })
    },
    // Hide stuff
    '& .MuiTouchRipple-root': {
      display: 'none'
    }
  })
)

function SelectionTile({ label, sublabel, ...rest }: ISelectionTileProps) {
  return <StyledRadio label={label} sublabel={sublabel} {...rest} />
}

export default SelectionTile
