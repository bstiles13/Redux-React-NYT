let axios = require('axios');

export default function () {
    // axios.get('/articles')
    //     .then(function (response) {
    //         console.log(response.data);
    //         return response.data;
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    return [
        {
            id: 1,
            headline: "Dogs are better than cats"
        },
        {
            id: 2,
            headline: "Go Broncos!"
        }
    ]
}