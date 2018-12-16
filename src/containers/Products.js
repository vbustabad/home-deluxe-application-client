import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts, fetchCurrentProduct } from '../actions/products';
import { addProductToShoppingCart } from '../actions/shoppingCart';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Products extends Component {
    
  componentDidMount() {
    this.props.getProducts()
  }

  addProductToShoppingCart = product => {
    console.log(product)
    this.props.addProductToShoppingCart(product)
  }

  render() {
    console.log("products", this.props.products)
    return (
      <div className="Products">
        <br />
        <p>To view your shopping cart, please click here:</p>
        <Link to='/shopping-cart'><button>View Shopping Cart</button></Link>

        <h2>Products</h2>
        {this.props.products.map((product, index) => <ProductCard key={index} product={product} addProductToShoppingCart={this.addProductToShoppingCart}/>)}
      </div>
    )
  }
};

const mapStateToProps = state => {
    return { products: state.products }
  }

export default connect(mapStateToProps, { getProducts, fetchCurrentProduct, addProductToShoppingCart })(Products);
