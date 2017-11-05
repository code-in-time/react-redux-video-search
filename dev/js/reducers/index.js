import {combineReducers} from 'redux'
import VideosListReducer from './reducer-videos-list';
import SearchTermReducer from './reducer-search-term';

const allReducers = combineReducers({
    videosList: VideosListReducer,
    searchTerm: SearchTermReducer
});

export default allReducers;