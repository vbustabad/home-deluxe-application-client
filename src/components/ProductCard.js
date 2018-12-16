import React from 'react';

const ProductCard = (props) => (

    <div key={props.product.id} className="ProductCard">
      <h4>Product</h4>
      <p>{props.product.name}</p>
      <p>Price: ${props.product.price}</p>
      <img className="ProductImage" src={props.product.image_url} alt={props.product.name} /><br /><br />
          
      <button onClick={() => props.addProductToShoppingCart(props.product)}>Add to Shopping Cart</button>
    </div>
);

export default ProductCard;

