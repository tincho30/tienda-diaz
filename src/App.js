import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import ItemListNoMeLaContainer from './components/ItemListNoMeLaContainter/ItemListNoMeLaContainer';
import Navbar from './components/Navbar/Navbar';
import ItemDetailContainer from './components/ItemDetailContainer/Index'
import CartContextProvider from './context/CartContextProvider';
import Cart from './screens/Cart';

const App = () => (
    <BrowserRouter>
    <CartContextProvider>
      <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <ItemListNoMeLaContainer titulo="Listado general lince"/>
          </Route>
          <Route exact path="/section/:secId">
            <ItemListNoMeLaContainer titulo="FILTRADO"/>
          </Route>
          <Route exact path="/product/:productId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
         { /*<Route exact path="*">
            <Redirect to="/" />
          </Route> */}
        </Switch>
        </CartContextProvider>
    </BrowserRouter>
    
  );

export default App;
