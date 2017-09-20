export const userSearch = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    return {
        type: "SEARCH",
        payload: {
            [event.target.name]: event.target.value
        }
    }
}