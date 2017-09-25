const axios = require('axios');

export const getFavorites = () => {
    console.log('getting favorites');
    return function(dispatch) {
        axios.get('/favorites').then(data => {
            console.log('got favorites');
            console.log(data.data);
            dispatch({
                type: 'GET_FAVORITES',
                payload: data.data
            })
        })
    }
}