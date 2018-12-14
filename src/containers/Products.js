import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../actions/products';
import { connect } from 'react-redux';

class Products extends Component {
    
  componentDidMount() {
    this.props.getProducts()
  }

  //handleClick = e => {
    //e.preventDefault();
    //const id = e.target.id;
    //this.props.fetchCurrentProduct(id)
  //}

  render() {
    console.log("products", this.props.products)
    return (
      <div className="Products">
        <h2>Products</h2>
        {this.props.products.map((product, index) => <ProductCard key={index} product={product} handleClick={this.handleClick}/>)}
      </div>
    )
  }
};

const mapStateToProps = state => {
    return { products: state.products }
  }

export default connect(mapStateToProps, { getProducts })(Products);
