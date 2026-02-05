// GridLayout.tsx
import styled from '@emotion/styled';
import { Grid } from '@mui/material'; // or any Grid component

interface GridContainerProps {
  gap?: number;
  columns?: number;
}

export const StyledGridContainer = styled(Grid)<GridContainerProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 3}, 1fr);
  gap: ${props => props.gap || 20}px;
  padding: 20px;
  background-color: #f5f5f5;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 10px;
  }

  > div {
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const GridLayout: React.FC = () => {
  return (
    <StyledGridContainer gap={24} columns={3}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </StyledGridContainer>
  );
};

export default GridLayout;