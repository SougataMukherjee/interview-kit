import { css } from '@emotion/react'
import { BUTTON_COLORS } from '../constants/button.constant'
import { ButtonVariant } from '../enums/button.enum'

export const buttonStyle = (
  variant: ButtonVariant,
  borderRadius: number
) =>
  css`
    background-color: ${BUTTON_COLORS[variant].bg};
    color: ${BUTTON_COLORS[variant].color};
    border-radius: ${borderRadius}px;
    padding: 8px 20px;
    text-transform: none;
    font-weight: 500;

    &:hover {
      opacity: 0.9;
      background-color: ${BUTTON_COLORS[variant].bg};
    }
  `
