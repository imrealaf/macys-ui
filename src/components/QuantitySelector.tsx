import React from 'react'
import {
  Box,
  Input,
  InputProps,
  InputAdornment,
  IconButton
} from '@mui/material'
import { styled } from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

export interface IQuantitySelectorProps extends InputProps {
  value: number | 0
  min: number
  max: number
  step: number
  onIncrease?(): void
  onDecrease?(): void
}

/**
 * Wrapped Input with styling
 */
const size = 40
const StyledInput = styled(Input)<InputProps>(({ theme }) => ({
  height: `${size}px`,
  border: `1px solid ${theme.palette.gray2.main}`,
  borderRadius: '5px',
  width: `${size * 3}px`,
  '-moz-appearance': 'textfield',
  '& .MuiInput-input::-webkit-outer-spin-button, & .MuiInput-input::-webkit-inner-spin-button':
    {
      '-webkit-appearance': 'none',
      margin: 0
    },
  '&::before, &::after': {
    border: 'none !important'
  },
  '& .MuiInputAdornment-positionStart .MuiIconButton-root': {
    borderRight: `1px solid ${theme.palette.gray2.main}`
  },
  '& .MuiInputAdornment-positionEnd .MuiIconButton-root': {
    borderLeft: `1px solid ${theme.palette.gray2.main}`
  },
  '& .MuiIconButton-root': {
    borderRadius: '0'
  },
  '& .MuiInput-input': {
    textAlign: 'center'
  }
}))

/**
 * QuantitySelector
 * @description custom quantity component that utilizes MUI Input component
 */
function QuantitySelector({
  value,
  min = 0,
  max = 99,
  step = 1,
  onChange,
  onIncrease = () => {},
  onDecrease = () => {}
}: IQuantitySelectorProps) {
  const inputProps: Record<string, any> = {
    type: 'number',
    min,
    max,
    step
  }

  const handleKeyPress: React.KeyboardEventHandler = (e) => {
    const target = e.target as HTMLInputElement
    const value = target.value
    console.log(e.key)
    if (value.length >= 2 || e.key === '-') e.preventDefault()
  }

  return (
    <Box>
      <StyledInput
        type='number'
        value={value}
        onChange={onChange}
        inputProps={inputProps}
        onKeyPress={handleKeyPress}
        startAdornment={
          <InputAdornment position='start'>
            <IconButton onClick={onDecrease} disabled={value === min}>
              <RemoveIcon />
            </IconButton>
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position='end'>
            <IconButton onClick={onIncrease}>
              <AddIcon />
            </IconButton>
          </InputAdornment>
        }
      />
    </Box>
  )
}

export default QuantitySelector
