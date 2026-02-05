import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface GalleryProps {
  images: string[];
}

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 8px;
    padding: 10px;
  }
`;

const getImageStyle = (index: number) => css`
  img#image-${index} {
    width: ${index % 2 === 0 ? '200px' : '250px'};
    height: ${index % 2 === 0 ? '200px' : '250px'};
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease;
    border: ${index === 0 ? '3px solid #007bff' : '1px solid #ddd'};

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      width: 150px;
      height: 150px;
    }
  }

  div#container-${index} {
    position: relative;
    background-color: ${index % 3 === 0 ? '#f0f0f0' : '#ffffff'};
    padding: 10px;

    &:before {
      content: '${index + 1}';
      position: absolute;
      top: 5px;
      left: 5px;
      background-color: #007bff;
      color: white;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
    }
  }
`;

const ImageGallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <GalleryContainer>
      {images.map((img, index) => (
        <div key={index} css={getImageStyle(index)} id={`container-${index}`}>
          <img id={`image-${index}`} src={img} alt={`Gallery ${index}`} />
        </div>
      ))}
    </GalleryContainer>
  );
};

export default ImageGallery;