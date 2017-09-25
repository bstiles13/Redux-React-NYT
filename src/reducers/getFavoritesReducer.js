export default function (state = null, action) {
    switch (action.type) {
        case "GET_FAVORITES":
            return action.payload
            break;
    }
    return state;
}