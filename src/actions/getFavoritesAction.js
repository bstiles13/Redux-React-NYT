const axios = require('axios');

export const getFavorites = () => {
    return function(dispatch) {
        axios.get('/favorites').then(data => {
            dispatch({
                type: 'GET_FAVORITES',
                payload: data.data
            })
        })
    }
}