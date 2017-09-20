export default function(state={
    term: "n/a",
    start: "n/a",
    end: "n/a"
}, action) {
    switch (action.type) {
        case "SEARCH": 
        state = {...state, [Object.keys(action.payload)[0]]: action.payload[Object.keys(action.payload)[0]]}
        break;
    }
    return state;
}