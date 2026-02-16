import type { Product } from '../interfaces/Product';

interface Props {
  products: Product[];
  onAdd: (p: Product) => void;
}

const Products = ({ products, onAdd }: Props) => {
  return(<>
    {products.map(p => (
      <div key={p.id}>
        <img src={p.image} width="50" />
        <p>{p.title}</p>
        <button onClick={() => onAdd(p)}>Add</button>
      </div>
    ))}
  </>)
};

export default Products;
