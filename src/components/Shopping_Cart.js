import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const ShoppingCart = (props) => ( 

    <div className="Shopping-Cart">
      <h1>My Shopping Cart</h1>

      <h3>Please see the current items that have been added to your shopping cart:</h3>

      {this.props.shoppingCart.map((product, index) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>Price: ${product.price}</p>
          <img className="ProductImage" src={product.image_url} alt={product.name} /><br /><br />
        </div>
      ))}

      <button><Link to='/order'>Confirm Order</Link></button>
    </div>
  );

const mapStateToProps = (state) => ({
  shoppingCart: state.shoppingCart.cart
});
    
export default connect(mapStateToProps, null)(ShoppingCart);
  
//export default ShoppingCart;
  