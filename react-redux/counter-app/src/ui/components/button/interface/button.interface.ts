import { ReactNode, MouseEventHandler } from 'react'
import { ButtonVariant } from '../enums/button.enum'

export interface AppButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  borderRadius?: number
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  fullWidth?: boolean
  id?: string
}
