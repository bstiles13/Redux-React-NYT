export default function (state = null, action) {
    switch (action.type) {
        case "SEARCH_RESULTS":
            return action.payload
            break;
    }
    return state;
}