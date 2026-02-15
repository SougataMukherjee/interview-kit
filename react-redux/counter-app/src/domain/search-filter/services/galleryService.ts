import type { Item } from '../interfaces/gallery';

export const fetchItemsApi = (): Promise<Item[]> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Apple', image: 'https://via.placeholder.com/150', category: 'Fruit' },
        { id: 2, title: 'Banana', image: 'https://via.placeholder.com/150', category: 'Fruit' },
        { id: 3, title: 'Carrot', image: 'https://via.placeholder.com/150', category: 'Vegetable' }
      ]);
    }, 500);
  });
