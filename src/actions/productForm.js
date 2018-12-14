import productFormData from '../reducers/productFormData';

export const updateProductFormData = productFormData => {
    return {
        type: "UPDATED_DATA", 
        productFormData
    };
}

export const resetProductForm = () => {
    return {
        type: "RESET_PRODUCT_FORM", 
        productFormData
    };
}
