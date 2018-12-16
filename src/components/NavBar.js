import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () =>
  <div>
    <NavLink to="/" exact style={link} activeStyle={{background: 'lightblue'}}>Home</NavLink>
    <NavLink to="/about" exact style={link} activeStyle={{background: 'lightblue'}}>About</NavLink>
    <NavLink to="/login" exact style={link} activeStyle={{background: 'lightblue'}}>Login</NavLink>
    <NavLink to="/products" exact style={link} activeStyle={{background: 'lightblue'}}>Products</NavLink>
    <NavLink to="/signup" exact style={link} activeStyle={{background: 'lightblue'}}>Signup</NavLink>
  </div>

const link = {
  width: '100px',
  padding: '12px',
    margin: '0 6px 6px',
    background: 'lightblue',
    textDecoration: 'none',
    color: 'white',
}

export default NavBar;
