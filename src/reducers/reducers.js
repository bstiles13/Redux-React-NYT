import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer.js';
import searchReducer from './searchReducer.js';

let reducers = combineReducers({
    articles: articlesReducer,
    search: searchReducer
})

export default reducers;