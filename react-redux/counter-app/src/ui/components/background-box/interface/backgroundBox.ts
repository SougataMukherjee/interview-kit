import type { ReactNode } from 'react'
import { BackgroundBoxVariant } from '../enums'

export interface BackgroundBoxProps {
  children: ReactNode
  variant?: BackgroundBoxVariant
  padding?: string
}
