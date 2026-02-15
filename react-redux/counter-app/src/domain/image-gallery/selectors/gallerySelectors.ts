import { createSelector } from 'reselect';
import type{ Image } from '../interfaces';
import type{ RootState } from '../../../app/store';

// Basic selectors
export const getGalleryState = (state: RootState) => {
  console.log('SELECTOR state.gallery', state.gallery);
  return state.gallery ;
};


// Memoized selectors
export const getImages = createSelector(
  [getGalleryState],
  gallery => gallery.images
);

export const getLoading = createSelector(
  [getGalleryState],
  gallery => gallery.loading
);

export const getError = createSelector(
  [getGalleryState],
  gallery => gallery.error
);

export const getPage = createSelector(
  [getGalleryState],
  gallery => gallery.page
);

// Derived data selectors
export const getImagesByAuthor = createSelector(
  [getImages],
  (images) => {
    const authorMap: Record<string, Image[]> = {};
    
    images.forEach(image => {
      if (!authorMap[image.author]) {
        authorMap[image.author] = [];
      }
      authorMap[image.author].push(image);
    });
    
    return authorMap;
  }
);

export const getImageStats = createSelector(
  [getImages],
  (images) => ({
    count: images?.length,
    averageWidth: images?.length 
      ? images.reduce((sum, img) => sum + img.width, 0) / images.length 
      : 0,
    averageHeight: images?.length 
      ? images.reduce((sum, img) => sum + img.height, 0) / images.length 
      : 0
  })
);

// Combined selector for gallery data
export const getGalleryData = createSelector(
  [getImages, getLoading, getError, getImageStats],
  (images, loading, error, stats) => ({
    images,
    loading,
    error,
    stats
  })
);