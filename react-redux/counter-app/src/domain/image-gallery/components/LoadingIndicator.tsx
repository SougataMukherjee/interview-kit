import React from 'react';
import { LoadingContainer, Spinner } from '../styles/galleryStyles';

const LoadingIndicator: React.FC = () => {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  );
};

export default LoadingIndicator;