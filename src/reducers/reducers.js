import { combineReducers } from 'redux';
import updateSearchReducer from './updateSearchReducer.js';
import submitSearchReducer from './submitSearchReducer.js';
import getFavoritesReducer from './getFavoritesReducer.js';

let reducers = combineReducers({
    search: updateSearchReducer,
    articles: submitSearchReducer,
    favorites: getFavoritesReducer
})

export default reducers;