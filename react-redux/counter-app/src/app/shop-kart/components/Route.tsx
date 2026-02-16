import { Switch, Route } from 'react-router-dom';
import Home from '../../../domain/shop-kart/container/Home';
import Cart from '../../../domain/shop-kart/container/Cart';
import {Tabs} from '../../../domain/shop-kart/components/Tabs';

const Routes = () => (
  <>
    <Tabs />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </>
);

export default Routes;
