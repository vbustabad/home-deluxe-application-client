export default function productsReducer(state = [], action) {
    switch (action.type) {
      case "GET_PRODUCTS_INFORMATION":
        return  action.products;

      case "ADD_PRODUCT":
        return  state.concat(action.product);
  
      default:
        return state;
    }
}