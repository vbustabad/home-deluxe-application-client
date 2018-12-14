import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProductFormData } from '../actions/productForm';
import { createProduct } from '../actions/products';

class ProductForm extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            name: "", 
            price: 0, 
            image_url: "", 
            category: ""
        }
        
        this.handleOnChange = this.handleOnChange.bind(this) 
        this.handleOnSubmit = this.handleOnSubmit.bind(this) 
    }

    handleOnChange(e) {
    //handleOnChange = event => {
        const { name, value } = e.target
        let state = this.state

        state[name] = value 
        this.setState(state)
    }

    handleOnSubmit(e) {
        e.preventDefault();
        this.props.createProduct(this.state);
    }    

    render() {

      return (
        <div className="ProductForm">
          <h2>Add a New Product</h2>
          <form onSubmit={this.handleOnSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleOnChange}
                />
              </div>
              <div>
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleOnChange}
                />
              </div>
              <div>
                <label htmlFor="image_url">Image URL:</label>
                <input
                    type="text"
                    name="image_url"
                    value={this.state.image_url}
                    onChange={this.handleOnChange}                
                />
              </div>
              <div>
                <label htmlFor="category">Category:</label>
                <input
                    type="text"
                    name="category"
                    value={this.state.category}
                    onChange={this.handleOnChange}
                />
              </div>
              <br />
              <button type="submit">Submit</button>
          </form>
        </div>
      )
    }
};
  
const mapStateToProps = state => {
    return { productFormData: state.productFormData }
  }

export default connect(mapStateToProps, { updateProductFormData, createProduct })(ProductForm);