import favoritesReducer from './favoritesReducer';
import {combineReducers} from 'redux';

 const allReducers = combineReducers({
    favoritesReducer: favoritesReducer
})

export default allReducers