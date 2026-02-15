import { connect } from 'react-redux';
import * as C from '../constants/galleryConstants';
import type { RootState } from '../../../app/store';
import { filteredItemsSelector } from '../selectors/gallerySelectors';
import { useEffect } from 'react';
import Input from '../../../ui/components/input';
import { Tabs } from '../components/Tabs';
import { ItemCard } from '../components/ItemCard';
import { Container, Grid } from '../styles';
import type {Props} from '../interfaces';

const GallerySearchContainer = ({
  items,
//   search,
  activeTab,
  fetchItems,
  setSearch,
  setTab
}: Props) => {
    useEffect(() => {
    fetchItems(); 
  }, [fetchItems]);
  return (
    <Container>
      <Input onChange={(e)=>setSearch(e.target.value)} placeholder='Search...'/>
      <Tabs active={activeTab} onChange={setTab} />

      <Grid>
        {items.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </Grid>
    </Container>
  );
};

const mapState = (state: RootState) => {
    console.log('container',state)
    return{
        items: filteredItemsSelector(state),
        search: state.gallerySearch.search,
        activeTab: state.gallerySearch.activeTab
    }

};

const mapDispatch = {
  fetchItems: () => ({ type: C.FETCH_ITEMS_REQUEST }),
  setSearch: (val: string) => ({ type: C.SET_SEARCH, payload: val }),
  setTab: (tab: string) => ({ type: C.SET_TAB, payload: tab })
};

export default connect(mapState, mapDispatch)(GallerySearchContainer);
