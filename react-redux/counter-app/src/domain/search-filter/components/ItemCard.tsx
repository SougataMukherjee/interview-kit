import { Card } from '../styles';
import type { Item } from '../interfaces/gallery';

export const ItemCard = ({ title, image }: Item) => (
  <Card>
    <img src={image} alt={title} />
    <h4>{title}</h4>
  </Card>
);
