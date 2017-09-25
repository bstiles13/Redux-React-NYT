const axios = require('axios');

export const setFavorite = (article) => {
    console.log('sending favorite');
    console.log(article);
    return function (dispatch) {
        axios.post('/setfavorite', article).then(data => {
            console.log('sent favorite');
            console.log(data.data);
            axios.get('/articles').then(data => {
                dispatch({
                    type: 'SEARCH_RESULTS',
                    payload: data.data
                })
            })
            axios.get('/favorites').then(data => {
                dispatch({
                    type: 'GET_FAVORITES',
                    payload: data.data
                })
            })
        })
    }
}