import {createStore, combineReducers} from 'redux';
import galleryReducer from './gallery-reducer';

const reducers = combineReducers({
    gallery: galleryReducer
});

let store = createStore(reducers);

window.store = store;
export default store;