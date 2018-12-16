import React from 'react';

const IndividualProduct = (props) => (

    <div key={props.product.id} className="IndividualProduct">
      <h4>Product</h4>
      <p>{props.product.name}</p>
      <p>Price: ${props.product.price}</p>
      <img className="ProductImage" src={props.product.image_url} alt="Product" />
      <p>Category: {props.product.category}</p>
      <br /><br />          
    </div>
);

export default IndividualProduct;