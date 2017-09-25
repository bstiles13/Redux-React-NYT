export const updateSearch = (event) => {
    return {
        type: "UPDATE_SEARCH",
        payload: {
            [event.target.name]: event.target.value
        }
    }
}