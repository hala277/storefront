// const initialState = [];

// function cartRed(state = initialState, action) {

//     const { type, payload } = action;

//     switch (type) {
//         case 'ADD':
//             return state = [...state, payload];
//         case 'REMOVE':
//             const items = state.filter((i) => i !== payload);
//             return (items);

       
//         default:
//             return state;
//     }
// }

// export const addTo = (item) => {
//     return {
//         type: 'ADD',
//         payload: item,
//     }
// }

// export const remove = (item) => {
//     return {
//         type: 'REMOVE',
//         payload: item,
//     }
// }

// export default cartRed;


import superagent from 'superagent';

import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], customer: {}, paymentInfo: {} },
  reducers: {
    add(state, action) {
      state.items = state.items.filter(product => product.name !== action.payload.name);
      state.items.push(action.payload);
    },
    remove(state, action) {
      state.items = state.items.filter(product => product._id !== action.payload._id);
    },
    updateCustomer(state, action) {
      state.customer = action.payload;
    },
    updatePaymentInfo(state, action) {
      state.paymentInfo = action.payload;
    }
  }
})

export const addTo = (product) => async dispatch => {
  let updatedProd = { inStock: product.inStock - 1 };
  let URL = `https://app-auth-obieda.herokuapp.com/api/v1/products/${product._id}`;
  let results = await superagent.put(URL).send(updatedProd);
  let record = results.body;
  dispatch(add(record));
};

export const removeFrom = (product) => async dispatch => {
  let updatedProd = { inStock: product.inStock + 1 };
  let url = `${process.env.REACT_APP_API}/products/${product._id}`;
  let results = await superagent.put(url).send(updatedProd);
  let record = results.body;
  dispatch(remove(record));
};

// Not publishing this internal action, only the thunk'd one above
const { add, remove } = cartSlice.actions

export default cartSlice.reducer

