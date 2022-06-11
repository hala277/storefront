// import axios from 'axios';
import superagent from 'superagent';

// export const getProdAction = payload => {
//     return {
//         type: 'GETDATA',
//         payload:payload,
//     }
// }

// const URL = 'https://app-auth-obieda.herokuapp.com/api/v1/products';

// export const getProd = () => (dispatch,state) => {
// return superagent.get(URL).then(result => {
//     dispatch(getProdAction(result.body))
// })
// }





// const initialState = [];

// function productsAPIRed(state = initialState, action) {
//     const { type, payload } = action;

//     switch (type) {
//         case 'GETDATA':
//             return payload;
//         default:
//             return state;
//     }
// }



// export default productsAPIRed;

import { createSlice } from '@reduxjs/toolkit'

const prodSlice = createSlice({
  name: 'products',
  initialState: { products: [], activeProd: {} },
  reducers: {
    add(state, action) {
      return state.map(product => product.name === action.payload.name ? action.payload : product);
    },
    setProd(state, action) {
      state.products = action.payload;
    },
    setActiveProd(state, action) {
      state.products = action.payload;
    }
  }
})

export const getProducts = (category) => async dispatch => {
  let response = await superagent.get(`https://app-auth-obieda.herokuapp.com/api/v1/products`);
  let records = response.body.results || [];
  let products = records.filter(product => product.category === category && product.inventoryCount > 0);
  dispatch(setProd(products));
};

export const getProduct = (id) => async dispatch => {
  let response = await superagent.get(`https://app-auth-obieda.herokuapp.com/api/v1/products/${id}`);
  let record = response.body || {};
  dispatch(setActiveProd(record));
};

export const { add, setActiveProd, setProd } = prodSlice.actions

export default prodSlice.reducer
