import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () =>
  <div>
    <NavLink to="/" exact style={link} activeStyle={{background: 'darkblue'}}>Home</NavLink>
    <NavLink to="/about" exact style={link} activeStyle={{background: 'darkblue'}}>About</NavLink>
    <NavLink to="/login" exact style={link} activeStyle={{background: 'darkblue'}}>Login</NavLink>
    <NavLink to="/products" exact style={link} activeStyle={{background: 'darkblue'}}>Products</NavLink>
    <NavLink to="/signup" exact style={link} activeStyle={{background: 'darkblue'}}>Signup</NavLink>
    <NavLink to="/order" exact style={link} activeStyle={{background: 'darkblue'}}>Order</NavLink>
  </div>

const link = {
  width: '100px',
  padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
}

export default NavBar;
