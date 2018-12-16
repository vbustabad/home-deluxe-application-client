const initialState = {products: [], product: {}};

export default function productsReducer(state = initialState, action) {
    switch (action.type) {
      case "GET_PRODUCTS_INFORMATION":
        return  {...state, products: action.products};

      case "GET_INDIVIDUAL_PRODUCT_INFORMATION":
        return  {...state, product: action.product};

      case "ADD_PRODUCT":
        return  {...state, products: state.products.concat(action.product) };
  
      default:
        return state;
    }
}