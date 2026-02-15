import { connect } from 'react-redux';
import * as C from '../constants/galleryConstants';
import type { RootState } from '../../../app/store';
import { filteredItemsSelector } from '../selectors/gallerySelectors';

import { SearchBox } from '../components/SearchBox';
import { Tabs } from '../components/Tabs';
import { ItemCard } from '../components/ItemCard';
import { Container, Grid } from '../styles';

const GalleryContainer = ({
  items,
  search,
  activeTab,
  fetchItems,
  setSearch,
  setTab
}: any) => {
  return (
    <Container>
      <SearchBox onSearch={setSearch} />
      <Tabs active={activeTab} onChange={setTab} />

      <Grid>
        {items.map((item: any) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </Grid>
    </Container>
  );
};

const mapState = (state: RootState) => ({
  items: filteredItemsSelector(state),
  search: state.gallery.search,
  activeTab: state.gallery.activeTab
});

const mapDispatch = {
  fetchItems: () => ({ type: C.FETCH_ITEMS_REQUEST }),
  setSearch: (val: string) => ({ type: C.SET_SEARCH, payload: val }),
  setTab: (tab: string) => ({ type: C.SET_TAB, payload: tab })
};

export default connect(mapState, mapDispatch)(GalleryContainer);
