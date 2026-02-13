import styled from '@emotion/styled'
import { css } from '@emotion/react'

export const TodoContainer = styled.div`
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const TodoItem = styled.div<{ completed: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background: #f1f3f4;
  border-radius: 4px;

  ${(props) =>
    props.completed &&
    css`
      text-decoration: line-through;
      opacity: 0.6;
    `}
`

export const Button = styled.button`
  border: none;
  background: #4285f4;
  color: white;
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  border-radius: 4px;
`
