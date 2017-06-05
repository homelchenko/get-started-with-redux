import { combineReducers, createStore } from 'redux';

import todos from './todoReducer';
import visibilityFilter from './visibilityFilterReducer';

const reducer = combineReducers({
    todos,
    visibilityFilter
});

const store = createStore(reducer);

export default store;

