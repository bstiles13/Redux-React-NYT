const axios = require('axios');

export const submitSearch = (parameters) => {
    console.log('submitting');
    console.log(parameters);
    return function(dispatch) {
        axios.post('/search', parameters).then(data => {
            console.log('success');
            console.log(data.data);
            dispatch({
                type: 'SEARCH_RESULTS',
                payload: data.data
            })
        })
    }
}