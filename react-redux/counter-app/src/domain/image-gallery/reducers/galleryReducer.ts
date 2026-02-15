import type { GalleryState, GalleryActions } from '../interfaces';
import { GalleryActionTypes } from '../interfaces';


// Initial state
const initialState: GalleryState = {
  images: [],
  loading: false,
  error: null,
  page: 1
};

// Gallery reducer
const galleryReducer = (
  state: GalleryState = initialState,
  action: GalleryActions
): GalleryState => {
  console.log('REDUCER:',state, action.type);
  switch (action.type) {
    case GalleryActionTypes.FETCH_IMAGES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case GalleryActionTypes.FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        images: [...state.images, ...action.payload]
      };
    
    case GalleryActionTypes.FETCH_IMAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    
    case GalleryActionTypes.LOAD_MORE_IMAGES:
      return {
        ...state,
        page: state.page + 1
      };
    
    default:
      return state;
  }
};

export default galleryReducer;