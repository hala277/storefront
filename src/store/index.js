import { combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import {configureStore } from "@reduxjs/toolkit";
import categories from './categories';
// import cartRed from './cart';
// import thunk from './middleware/thunk';
import products from './products';
import cart from './cart';

let reducers = combineReducers({
    products,categories,cart

});

const store = () => {
    return configureStore({reducer:reducers});
}

export default store();