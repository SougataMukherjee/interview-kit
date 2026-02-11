import styled from '@emotion/styled'
import { BACKGROUND_COLORS, BORDER_RADIUS } from '../constants'
import { BackgroundBoxVariant } from '../enums'

interface StyleProps {
  variant: BackgroundBoxVariant
  padding: string
}

export const Box = styled.div<StyleProps>`
  background-color: ${({ variant }) => BACKGROUND_COLORS[variant]};
  border-radius: ${BORDER_RADIUS};
  padding: ${({ padding }) => padding};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
`
