import React, { Component } from 'react';
import ShoppingCart from './Shopping_Cart';
import { fetchCurrentProduct } from '../actions/products';
import { connect } from 'react-redux';

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isButtonClicked: false
    };

    this.handleClick = this.handleClick.bind(this) 
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      isButtonClicked: true
    });
    const id = e.target.id;
    this.props.fetchCurrentProduct(id)
  }

  render() {
    const isButtonClicked = this.state.isButtonClicked;

    if (isButtonClicked === true) {
      return <ShoppingCart product={this.props.product} />;
    } else {
      return <p>Information is loading.</p>;
    }

    return (
      <div key={props.product.id} className="ProductCard">
        <h4>Product</h4>
        <p>{props.product.name}</p>
        <p>Price: ${props.product.price}</p>
        <img className="ProductImage" src={props.product.image_url} alt={props.product.name} /><br /><br />
        
        <button onClick={this.handleClick} id={props.product.id}>Add to Shopping Cart</button>
      </div>
  )};
}

export default connect(null, { fetchCurrentProduct })(ProductCard);







//(e) => this.props.handleClick(e)

//if (button is clicked) {
  //<ShoppingCart handleClick={this.props.handleClick} />
//} else {
  //<p>Information is loading.</p>
//}
//</div>
  
// Code functionality to be able to add product to shopping cart.
// Connect this to the store?