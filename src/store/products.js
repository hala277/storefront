// import axios from 'axios';
import superagent from 'superagent';

export const getProdAction = payload => {
    return {
        type: 'GETDATA',
        payload:payload,
    }
}

const URL = 'https://app-auth-obieda.herokuapp.com/api/v1/products';

export const getProd = () => (dispatch,state) => {
return superagent.get(URL).then(result => {
    dispatch(getProdAction(result.body))
})
}





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



export default productsAPIRed;