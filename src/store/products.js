import axios from 'axios';

const URL = 'https://hala-api-server.herokuapp.com/prod';

const initialState = [];

function productsAPIRed(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GETDATA':
            return payload;
        default:
            return state;
    }
}

export const getProd = () => async(dispatch,state) => {
    let response = await axios.get(URL);
    let getResponse = response.data;
    dispatch(getProdAction(getResponse));
}

export function getProdAction(products){
    return {
        type: 'GETDATA',
        payload:products,
    }
}

export default productsAPIRed;