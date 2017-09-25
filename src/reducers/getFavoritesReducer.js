export default function (state = null, action) {
    console.log(action.payload);
    console.log('action received');
    switch (action.type) {
        case "GET_FAVORITES":
            return action.payload
            break;
    }
    return state;
}