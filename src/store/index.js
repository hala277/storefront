import { combineReducers,createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productRed from './products';

let reducers = combineReducers({store:productRed});

const store = () => {
    return createStore(reducers,composeWithDevTools());
}

export default store();