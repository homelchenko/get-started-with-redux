import { combineReducers, createStore } from 'redux';
import { v4 } from 'node-uuid';

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
        id: v4(),
        text: 'Buy milk',
        completed: false
    }, {
        type: 'ADD_TODO',
        id: v4(),
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
    saveState({
        todos: store.getState().todos
    });
});

export default store;

