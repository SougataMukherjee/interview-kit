import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { fetchImagesRequest, loadMoreImages } from '../actions';
import { getGalleryData } from '../selectors/gallerySelectors';
import type{ GalleryActions } from '../interfaces';
import type {RootState} from '../../../app/store'
import Gallery from '../components/Gallery';

// Map state to props using selectors
const mapStateToProps = (state: RootState) => {
  const galleryData = getGalleryData(state);
  console.log('container',state)
  return {
    images: galleryData.images,
    loading: galleryData.loading,
    error: galleryData.error,
    stats: galleryData.stats
  };
};

// Map dispatch to props

const mapDispatchToProps = (dispatch: Dispatch<GalleryActions>) => ({
  onFetchImages: () => {
    console.log('🚀 Dispatching fetchImagesRequest');
    return dispatch(fetchImagesRequest());
  },
  onLoadMore: () => {
    console.log('🚀 Dispatching loadMoreImages');
    return dispatch(loadMoreImages());
  }
});

// Connect HOC
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery);
console.log('CONNECT DONE');
