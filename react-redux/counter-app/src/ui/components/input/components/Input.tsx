import React from 'react'
import TextField from '@mui/material/TextField'
import { inputStyle } from '../styles/input.styles'
import { InputVariant } from '../enums/input.enum'
import { DEFAULT_PLACEHOLDER } from '../constants/input.constants'
import type { AppInputProps } from '../interface/input.interface'

const Input: React.FC<AppInputProps> = ({
  value,
  onChange,
  placeholder = DEFAULT_PLACEHOLDER,
  variant = InputVariant.OUTLINED,
  label,
  disabled = false,
  fullWidth = true,
  error = false,
  helperText,
  id,
}) => {
  return (
    <TextField
      id={id}
      css={inputStyle(variant)}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      variant={variant}
      label={label}
      disabled={disabled}
      fullWidth={fullWidth}
      error={error}
      helperText={helperText}
    />
  )
}

export default Input
