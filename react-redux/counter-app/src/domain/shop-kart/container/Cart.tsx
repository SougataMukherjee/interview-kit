import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import { getCartItems } from '../selectors/cartSelectors';

const Cart = ({ cart, removeFromCart }: any) => (
  <>
    {cart.map((item: any) => (
      <div key={item.id}>
        {item.title}
        <button onClick={() => removeFromCart(item.id)}>Delete</button>
      </div>
    ))}
  </>
);

const mapState = (state: any) => {
  console.log('FULL Cart STATE 👉', state);
  return {
    cart: getCartItems(state.root)
  };
};

export default connect(mapState, { removeFromCart })(Cart);
