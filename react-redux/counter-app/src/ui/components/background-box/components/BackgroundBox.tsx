import React from 'react'
import { Box } from '../styles'
import type { BackgroundBoxProps } from '../interface'
import { BackgroundBoxVariant } from '../enums'
import { DEFAULT_PADDING } from '../constants'

const BackgroundBox: React.FC<BackgroundBoxProps> = ({
  children,
  variant = BackgroundBoxVariant.LIGHT,
  padding = DEFAULT_PADDING,
}) => {
  return (
    <Box variant={variant} padding={padding}>
      {children}
    </Box>
  )
}

export default BackgroundBox
