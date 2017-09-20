export default function(state=null, action) {
    console.log(action.payload);
    console.log('action received');
    switch (action.type) {
        case "SEARCH_RESULTS": 
        return action.payload
        break;
    }
    return state;
}