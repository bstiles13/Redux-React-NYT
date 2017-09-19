import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer.js';

let reducers = combineReducers({
    articles: articlesReducer
})

export default reducers;