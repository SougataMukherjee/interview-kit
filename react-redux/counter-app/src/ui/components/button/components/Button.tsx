import React from 'react'
import MuiButton from '@mui/material/Button'
import type { AppButtonProps } from '../interface/button.interface'
import { ButtonVariant } from '../enums/button.enum'
import { DEFAULT_RADIUS } from '../constants/button.constant'
import { buttonStyle } from '../styles/button.styles'

const Button: React.FC<AppButtonProps> = ({
  children,
  variant = ButtonVariant.PRIMARY,
  borderRadius = DEFAULT_RADIUS,
  onClick,
  disabled = false,
  fullWidth = false,
  id,
}) => {
  return (
    <MuiButton
      id={id}
      css={buttonStyle(variant, borderRadius)}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      variant={variant === ButtonVariant.OUTLINED ? 'outlined' : 'contained'}
    >
      {children}
    </MuiButton>
  )
}

export default Button
