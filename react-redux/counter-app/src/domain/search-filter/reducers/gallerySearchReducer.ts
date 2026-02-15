import type { GalleryState } from '../interfaces/gallery';
import * as C from '../constants/galleryConstants';

const initialState: GalleryState = {
  items: [],
  loading: false,
  search: '',
  activeTab: 'All',
};

 const gallerySearchReducer = (
  state = initialState,
  action: any
): GalleryState => {
  switch (action.type) {
    case C.FETCH_ITEMS_REQUEST:
      return { ...state, loading: true };

    case C.FETCH_ITEMS_SUCCESS:
      return { ...state, loading: false, items: action.payload };

    case C.SET_SEARCH:
      return { ...state, search: action.payload };

    case C.SET_TAB:
      return { ...state, activeTab: action.payload };

    default:
      return state;
  }
};
export default gallerySearchReducer;