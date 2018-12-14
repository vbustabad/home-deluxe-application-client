const initialState = {
    name: '', 
    price: 0, 
    image_url: '', 
    category: ''
}

function productFormData(state = initialState, action) {
    switch (action.type) {
        case "UPDATED_DATA":
          return action.productFormData;

        case "RESET_PRODUCT_FORM":
          return initialState;
    
        default:
          return state;
    }
}

export default productFormData;