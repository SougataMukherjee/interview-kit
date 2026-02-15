export interface Item {
  id: number;
  title: string;
  image: string;
  category: string;
}

export interface GalleryState {
  items: Item[];
  loading: boolean;
  search: string;
  activeTab: string;
}

interface StateProps {
  items: Item[];
  activeTab: string;
}

interface DispatchProps {
  fetchItems: () => void;
  setSearch: (value: string) => void;
  setTab: (tab: string) => void;
}

export type Props = StateProps & DispatchProps;

