import React, { useEffect } from 'react';
// import type{ Image } from '../interfaces';
import ImageCard from './ImageCard';
import LoadingIndicator from './LoadingIndicator';
import {
  GalleryContainer,
  GalleryTitle,
  ImageGrid,
  // LoadMoreButton,
  ErrorMessage,
  // StatsContainer,
  StatItem
} from '../styles/galleryStyles';
import type { GalleryProps } from '../interfaces'
import Button from '../../../ui/components/button';
import BackgroundBox from '../../../ui/components/background-box/components';
import { BackgroundBoxVariant } from '../../../ui/components/background-box/enums'

const Gallery: React.FC<GalleryProps> = ({
  images,
  loading,
  error,
  stats,
  onFetchImages,
  onLoadMore
}) => {
  // Fetch images on component mount
  useEffect(() => {
     onFetchImages();
  }, [onFetchImages]);
  console.log('components:', {
  images,
  loading,
  error,
  stats,
  onFetchImages,
  onLoadMore,
});

  return (
    <GalleryContainer>
      <GalleryTitle>Image Gallery</GalleryTitle>
      
      <BackgroundBox variant={BackgroundBoxVariant.PRIMARY}>
        <StatItem>
          <h3>Images</h3>
          <p>{stats?.count}</p>
        </StatItem>
        <StatItem>
          <h3>Avg. Width</h3>
          <p>{Math.round(stats?.averageWidth)}px</p>
        </StatItem>
        <StatItem>
          <h3>Avg. Height</h3>
          <p>{Math.round(stats?.averageHeight )}px</p>
        </StatItem>
      </BackgroundBox>
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
     
          <ImageGrid>
            {images && images.map(image => (
              <ImageCard key={image.id} image={image} />
            ))}
          </ImageGrid>
      
      
      {loading && <LoadingIndicator />}
      <Button aria-label="increment" onClick={onLoadMore} disabled={loading}>
        {loading ? 'Loading...' : 'Load More'}
      </Button>
    </GalleryContainer>
  );
};

export default Gallery;