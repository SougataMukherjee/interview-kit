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
