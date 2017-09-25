const axios = require('axios');

export const submitSearch = (parameters) => {
    return function(dispatch) {
        axios.post('/search', parameters).then(data => {
            dispatch({
                type: 'SEARCH_RESULTS',
                payload: data.data
            })
        })
    }
}