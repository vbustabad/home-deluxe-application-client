const initialState = {
    cart: []
}

export default function shoppingCartReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_PRODUCT_TO_SHOPPING_CART":
          return {...state, cart: state.cart.concat(action.product)};

        default:
          return state;
    }
}