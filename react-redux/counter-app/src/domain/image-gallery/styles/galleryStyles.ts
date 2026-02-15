import styled from '@emotion/styled';
import { colors } from '../../../ui/common/styles/magnatic.style'

// Gallery container
export const GalleryContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
`;

export const GalleryTitle = styled.h1`
  text-align: center;
  color: ${colors.dark};
  margin-bottom: 2rem;
  font-weight: 300;
`;

// Image grid
export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1.5rem;
  margin-bottom: 2rem;
`;

// Image card
export const ImageCardContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: ${colors.white};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding-top: 75%; // 4:3 aspect ratio
  overflow: hidden;
`;

export const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageInfo = styled.div`
  padding: 1rem;
`;

export const ImageAuthor = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: ${colors.dark};
`;

export const ImageDimensions = styled.p`
  margin: 0.5rem 0 0;
  font-size: 0.875rem;
  color: #666;
`;

// Button styles
export const LoadMoreButton = styled.button`
  display: block;
  margin: 2rem auto;
  padding: 0.75rem 2rem;
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #303f9f;
  }
  
  &:disabled {
    background-color: #bdbdbd;
    cursor: not-allowed;
  }
`;

// Loading indicator
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: ${colors.primary};
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

// Error message
export const ErrorMessage = styled.div`
  padding: 1rem;
  margin: 2rem 0;
  background-color: #ffebee;
  border-left: 4px solid ${colors.error};
  color: #b71c1c;
  border-radius: 4px;
`;

// Stats section
export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  margin: 2rem 0;
  padding: 1rem;
  background-color: ${colors.light};
  border-radius: 8px;
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  
  h3 {
    margin: 0;
    font-size: 0.875rem;
    color: #666;
    font-weight: 400;
  }
  
  p {
    margin: 0.5rem 0 0;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${colors.primary};
  }
`;