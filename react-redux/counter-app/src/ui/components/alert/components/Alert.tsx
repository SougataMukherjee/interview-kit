import React from 'react'
import MuiAlert from '@mui/material/Alert'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

import type { AppAlertProps } from '../interface/alert.interface'
import { AlertVariant } from '../enums/alert.enum'
import {
  DEFAULT_ELEVATION,
  DEFAULT_SHOW_ICON,
} from '../constants/alert.constant'
import { alertStyle } from '../styles/alert.styles'

const Alert: React.FC<AppAlertProps> = ({
  message,
  variant = AlertVariant.INFO,
  showIcon = DEFAULT_SHOW_ICON,
  onClose,
  elevation = DEFAULT_ELEVATION,
  fullWidth = false,
  id,
}) => {
  return (
    <MuiAlert
      id={id}
      severity={variant}
      icon={showIcon ? undefined : false}
      elevation={elevation}
      css={alertStyle(variant, fullWidth)}
      action={
        onClose ? (
          <IconButton size="small" onClick={onClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        ) : null
      }
    >
      {message}
    </MuiAlert>
  )
}

export default Alert
