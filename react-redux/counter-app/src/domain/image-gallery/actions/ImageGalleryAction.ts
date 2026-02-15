import type{
  FetchImagesRequestAction,
  FetchImagesSuccessAction,
  FetchImagesFailureAction,
  LoadMoreImagesAction,
  Image
} from '../interfaces';
import { GalleryActionTypes } from '../interfaces';

// Action creators
export const fetchImagesRequest = (): FetchImagesRequestAction => {
  console.log('ACTION: FETCH_IMAGES_REQUEST');
  return { type: GalleryActionTypes.FETCH_IMAGES_REQUEST };
};


export const fetchImagesSuccess = (images: Image[]): FetchImagesSuccessAction => ({
  type: GalleryActionTypes.FETCH_IMAGES_SUCCESS,
  payload: images
});

export const fetchImagesFailure = (error: string): FetchImagesFailureAction => ({
  type: GalleryActionTypes.FETCH_IMAGES_FAILURE,
  payload: error
});

export const loadMoreImages = (): LoadMoreImagesAction => ({
  type: GalleryActionTypes.LOAD_MORE_IMAGES
});