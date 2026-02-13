import { ReactNode } from 'react'
import { AlertVariant } from '../enums/alert.enum'

export interface AppAlertProps {
  message: ReactNode
  variant?: AlertVariant
  showIcon?: boolean
  onClose?: () => void
  elevation?: number
  fullWidth?: boolean
  id?: string
}
