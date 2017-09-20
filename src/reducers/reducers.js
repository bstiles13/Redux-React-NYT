import { combineReducers } from 'redux';
import updateSearchReducer from './updateSearchReducer.js';
import submitSearchReducer from './submitSearchReducer.js';

let reducers = combineReducers({
    search: updateSearchReducer,
    articles: submitSearchReducer
})

export default reducers;