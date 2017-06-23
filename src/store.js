import { combineReducers, createStore } from 'redux';

import todos from './todoReducer';
import visibilityFilter from './visibilityFilterReducer';

const reducer = combineReducers({
    todos,
    visibilityFilter
});

const initialState = {
    todos: [{
        type: 'ADD_TODO',
        id: -2,
        text: 'Buy milk',
        completed: false
    }, {
        type: 'ADD_TODO',
        id: -1,
        text: 'Do the dishes',
        completed: true
    }]
};

const store = createStore(
    reducer,
    initialState);

export default store;

