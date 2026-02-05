
import styled from '@emotion/styled';

interface CardProps {
  elevated?: boolean;
  bgColor?: string;
}

export const StyledCard = styled.div<CardProps>`
  padding: 20px;
  background-color: ${props => props.bgColor || '#ffffff'};
  border-radius: 8px;
  box-shadow: ${props => props.elevated ? '0 4px 8px rgba(0,0,0,0.2)' : '0 2px 4px rgba(0,0,0,0.1)'};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.15);
  }

  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 4px;
  }

  p {
    color: ${props => props.elevated ? '#333' : '#666'};
    font-size: 14px;
    line-height: 1.6;
  }

  > div.container {
    margin-top: 10px;
    padding: 10px;
    background-color: #f8f9fa;
  }
`;

const Card: React.FC<CardProps> = ({ elevated, bgColor }) => {
  return (
    <StyledCard elevated={elevated} bgColor={bgColor}>
      <h3>Card Title</h3>
      <p>This is card content with emotion styled.</p>
      <div className="container">
        <span>Container content</span>
      </div>
    </StyledCard>
  );
};

export default Card;