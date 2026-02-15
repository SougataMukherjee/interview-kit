import React from 'react';
import type { Image } from '../interfaces';
import {
  ImageCardContainer,
  ImageWrapper,
  StyledImage,
  ImageInfo,
  ImageAuthor,
  ImageDimensions
} from '../styles/galleryStyles';

interface ImageCardProps {
  image: Image;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <ImageCardContainer>
      <ImageWrapper>
        <StyledImage 
          src={image.download_url} 
          alt={`Photo by ${image.author}`} 
          loading="lazy"
        />
      </ImageWrapper>
      <ImageInfo>
        <ImageAuthor>{image.author}</ImageAuthor>
        <ImageDimensions>
          {image.width} × {image.height}
        </ImageDimensions>
      </ImageInfo>
    </ImageCardContainer>
  );
};

export default ImageCard;