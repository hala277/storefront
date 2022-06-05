import { applyMiddleware, combineReducers,createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productRed from './categories';
import cartRed from './cart';
import thunk from './middleware/thunk';
import productsAPIRed from './products';

let reducers = combineReducers({
    store:productRed,
    cart:cartRed,
    products:productsAPIRed

});

const store = () => {
    return createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
}

export default store();