import { createSelector } from 'reselect';
import type { RootState } from '../../../app/store';

const galleryState = (state: RootState) => state.gallery;

export const filteredItemsSelector = createSelector(
  [galleryState],
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
