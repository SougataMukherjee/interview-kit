// Image data structure
export interface Image {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

// Gallery state structure
export interface GalleryState {
  images: Image[];
  loading: boolean;
  error: string | null;
  page: number;
}

// Root state structure
// export interface RootState {
//   gallery: GalleryState;
// }

//Gallery interface
export interface GalleryProps {
  images: Image[];
  loading: boolean;
  error: string | null;
  stats: {
    count: number;
    averageWidth: number;
    averageHeight: number;
  };
  onFetchImages: () => void;
  onLoadMore: () => void;
}

// Action types
export enum GalleryActionTypes {
  FETCH_IMAGES_REQUEST = 'FETCH_IMAGES_REQUEST',
  FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS',
  FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE',
  LOAD_MORE_IMAGES = 'LOAD_MORE_IMAGES',
}

// Action interfaces
export interface FetchImagesRequestAction {
  type: GalleryActionTypes.FETCH_IMAGES_REQUEST;
}

export interface FetchImagesSuccessAction {
  type: GalleryActionTypes.FETCH_IMAGES_SUCCESS;
  payload: Image[];
}

export interface FetchImagesFailureAction {
  type: GalleryActionTypes.FETCH_IMAGES_FAILURE;
  payload: string;
}

export interface LoadMoreImagesAction {
  type: GalleryActionTypes.LOAD_MORE_IMAGES;
}

export type GalleryActions =
  | FetchImagesRequestAction
  | FetchImagesSuccessAction
  | FetchImagesFailureAction
  | LoadMoreImagesAction;
  