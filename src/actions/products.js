import { resetProductForm } from './productForm';
//import fetch from 'cross-fetch';

const setProducts = products => {
    return {
        type: 'GET_PRODUCTS_INFORMATION',
        products
    };
};

export const getProducts = () => {
  return dispatch => {
      return fetch(`http://localhost:3001/api/products`)
        .then(response => response.json())
        .then(products => dispatch(setProducts(products)))
  }
}

export const fetchCurrentProduct = (id) => {
    return dispatch => {
        return fetch(`http://localhost:3001/api/products/${id}`)
        .then(response => response.json())
        .then(product => dispatch(setProducts(product)))
    }
}

export const addProduct = product => {
    return {
        type: "ADD_PRODUCT", 
        product
    }
}

export const createProduct = product => {
    console.log(product)
    return dispatch => {
        return fetch(`http://localhost:3001/api/products`, {  
          method: "POST",  
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }, 
          //body: JSON.stringify(product)
          body: JSON.stringify({product: product})
        })
          .then(response => response.json())
          .then(product => dispatch(addProduct(product), resetProductForm()))
    };
}