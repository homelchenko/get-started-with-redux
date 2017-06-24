import { combineReducers, createStore } from 'redux';

import todos from './todoReducer';
import { loadState, saveState } from './localStorage';

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

let persistedState = loadState();
if (!persistedState) {
    persistedState = initialState;
    saveState(persistedState);
}

const store = createStore(
    reducer,
    persistedState);

store.subscribe(() => {
    saveState(store.getState());
});

export default store;

