import React, { Component } from 'react';
import './App.css';
import { Route, withRouter, Switch } from 'react-router-dom';
import Products from './Products';
import Home from '../components/Home';
import ProductForm from './ProductForm';
import NavBar from '../components/NavBar';
import Login from '../components/Login';
import Signup from '../components/Signup';
import About from '../components/About';
import Profile from '../components/Profile';
import ShoppingCart from '../components/ShoppingCart';
import Order from '../components/Order';
import IndividualProductContainer from '../containers/IndividualProductContainer';

class App extends Component {

  render() {
    return (
          <div className="App">
            <div className="Hello">
            <NavBar />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/order" component={Order}/>
                <Route exact path="/products" component={Products}/>
                <Route exact path="/products/new" component={ProductForm}/> 
                <Route exact path="/products/:id" component={IndividualProductContainer}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/shopping-cart" component={ShoppingCart}/>
                <Route exact path="/signup" component={Signup}/>
              </Switch>
            </div>
          </div>
    );
  }
};

export default withRouter(App);