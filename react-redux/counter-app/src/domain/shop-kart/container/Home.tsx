import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import Products from '../components/Products';
import { getProducts } from '../selectors/productSelectors';

const Home = ({ products, fetchProducts, addToCart }: any) => {
  useEffect(() => {
    fetchProducts();
  }, []);

  return <Products products={products} onAdd={addToCart} />;
};

const mapState = (state: any) => {
  console.log('FULL STATE 👉', state);
  return {
    products: getProducts(state.root)
  };
};


export default connect(mapState, { fetchProducts, addToCart })(Home);

