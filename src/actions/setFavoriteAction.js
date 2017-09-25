const axios = require('axios');

export const setFavorite = (article) => {
    return function (dispatch) {
        axios.post('/setfavorite', article).then(data => {
            if (article.page == 'articles') {
                axios.get('/articles').then(data => {
                    dispatch({
                        type: 'SEARCH_RESULTS',
                        payload: data.data
                    })
                })
            }
            if (article.page == 'favorites') {
                axios.get('/favorites').then(data => {
                    dispatch({
                        type: 'GET_FAVORITES',
                        payload: data.data
                    })
                })
            }
        })
    }
}