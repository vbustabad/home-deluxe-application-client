import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './reducers/productsReducer';
import productFormData from './reducers/productFormData';
import shoppingCartReducer from './reducers/shoppingCartReducer';

const rootReducer = combineReducers({
    products: productsReducer, 
    productFormData, 
    shoppingCart: shoppingCartReducer
});

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__?
    window.__REDUX_DEVTOOLS_EXTENSION__() : (a) => a)
);

//const middleware = [thunk];

//const store = createStore(
    //rootReducer, 
    //applyMiddleware(ReduxThunk)
//) 

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

export default store;