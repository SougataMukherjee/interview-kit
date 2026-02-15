import { createSelector } from 'reselect';
import type { RootState } from '../../../app/store';

const gallerySearch = (state: RootState) => state.gallerySearch;
console.log('SELECTOR state.gallery',gallerySearch);
export const filteredItemsSelector = createSelector(
  [gallerySearch],
  ({ items, search, activeTab }) => {
    return items.filter(item => {
      const matchSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchTab =
        activeTab === 'All' || item.category === activeTab;

      return matchSearch && matchTab;
    });
  }
);
