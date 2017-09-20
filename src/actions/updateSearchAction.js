export const updateSearch = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    return {
        type: "UPDATE_SEARCH",
        payload: {
            [event.target.name]: event.target.value
        }
    }
}