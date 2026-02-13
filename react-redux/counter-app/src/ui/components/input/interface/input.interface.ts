import type { ChangeEventHandler, ReactNode } from 'react'
import type { InputVariant } from '../enums/input.enum'

export interface AppInputProps {
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
  placeholder?: string
  variant?: InputVariant
  label?: ReactNode
  disabled?: boolean
  fullWidth?: boolean
  error?: boolean
  helperText?: string
  id?: string
}
