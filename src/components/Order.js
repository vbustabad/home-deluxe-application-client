import React from 'react';
import { connect } from 'react-redux';

const Order = (props) => (
    <div className="Order">
      <h1>My Order</h1>
      
      <h3>Your order has been confirmed.</h3>

      <p>Please expect your item to be shipped to your address within 5 to 7 days.</p>

      <p>Order Summary:</p>

      <p>{props.shoppingCart[0].price}</p>
    </div>
  );

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart.cart
});
  
export default connect(mapStateToProps, null)(Order);
  