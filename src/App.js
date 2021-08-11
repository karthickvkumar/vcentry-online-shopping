import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from './pages/home';
import ShopPage from './pages/shop';
import ProductPage from './pages/product';
import ChartPage from './pages/chart';
import CheckoutPage from './pages/checkout';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/product/:id" component={ProductPage}></Route>
          <Route path="/cart" component={ChartPage}></Route>
          <Route path="/checkout" component={CheckoutPage}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;