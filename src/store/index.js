import { combineReducers,createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productRed from './products';
import cartRed from './cart';

let reducers = combineReducers({
    store:productRed,
    cart:cartRed
});

const store = () => {
    return createStore(reducers,composeWithDevTools());
}

export default store();