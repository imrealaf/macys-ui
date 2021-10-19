import React from 'react'
import { Input, InputProps, InputAdornment, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import CancelIcon from '@mui/icons-material/Cancel'

export interface ISearchFieldProps extends InputProps {
  value: string
  action?: React.ReactNode | undefined
  onClickSubmit?(): void
  onReset?(): void
}

const StyledInput = styled(Input)<InputProps>(({ theme }) => ({
  '&::before, &::after': {
    border: 'none !important'
  }
}))

function SearchField({ value, action, onReset, onChange }: ISearchFieldProps) {
  const showAdornment =
    (value && value.length && onReset) || action !== undefined
  const styles = {
    border: 'none'
  }
  const renderEndAdornment = () => {
    return (
      <InputAdornment position='end'>
        {value && value.length ? (
          <IconButton onClick={onReset}>
            <CancelIcon />
          </IconButton>
        ) : (
          action && action
        )}
      </InputAdornment>
    )
  }

  return (
    <StyledInput
      onChange={onChange}
      sx={styles}
      startAdornment={
        <InputAdornment position='start'>
          <SearchIcon />
        </InputAdornment>
      }
      endAdornment={showAdornment ? renderEndAdornment() : null}
    />
  )
}

export default SearchField
