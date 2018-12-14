import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from './reducers/productsReducer';
import productFormData from './reducers/productFormData';

const rootReducer = combineReducers({
    products: productsReducer, 
    productFormData
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