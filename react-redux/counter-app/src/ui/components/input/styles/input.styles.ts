import { css } from '@emotion/react'
import { InputVariant } from '../enums/input.enum'

export const inputStyle = (variant: InputVariant) => css`
  margin: 8px 0;

  & .MuiInputBase-root {
    border-radius: 6px;
  }

  ${variant === InputVariant.OUTLINED &&
  css`
    & .MuiOutlinedInput-root {
      &:hover fieldset {
        border-color: #1976d2;
      }
    }
  `}
`
