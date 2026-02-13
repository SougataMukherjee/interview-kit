import { css } from '@emotion/react'
import { AlertVariant } from '../enums/alert.enum'

export const alertStyle = (variant: AlertVariant, fullWidth: boolean) => css`
  width: ${fullWidth ? '100%' : 'auto'};
  border-radius: 8px;
  font-weight: 500;

  &.MuiAlert-standardSuccess {
    background-color: #e6f4ea;
  }

  &.MuiAlert-standardError {
    background-color: #fdecea;
  }

  &.MuiAlert-standardWarning {
    background-color: #fff4e5;
  }

  &.MuiAlert-standardInfo {
    background-color: #e8f0fe;
  }
`
