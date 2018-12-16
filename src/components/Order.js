import React from 'react';
import { connect } from 'react-redux';

const Order = (props) => (
    <div className="Order">
      <h1>My Order</h1>
      
      <h3>Your order has been confirmed.</h3>

      <p>Please expect your item to be shipped to your address within 5 to 7 days.</p>

      <p>Order Summary:</p>

       {props.shoppingCart.map((product, index) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>Price: ${product.price}</p>
          <img className="ProductImage" src={product.image_url} alt={product.name} />
          <p>Category: {product.category}</p>
          <br /><br />
          <p>Thank you for choosing Home-Deluxe Application! We hope to see you again soon.</p>
        </div>
      ))}
    </div>
  );

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart.cart
});
  
export default connect(mapStateToProps, null)(Order);
  