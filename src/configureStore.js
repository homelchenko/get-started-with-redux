import { combineReducers, createStore } from 'redux';
import throttle from 'lodash/throttle';
import { v4 } from 'node-uuid';

import todos from './todoReducer';
import { loadState, saveState } from './localStorage';

import visibilityFilter from './visibilityFilterReducer';

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

const configureStore = () => {
    const reducer = combineReducers({
        todos,
        visibilityFilter
    });

    const store = createStore(
        reducer,
        persistedState);

    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos
        });
    }, 1000));

    return store;
}

export default configureStore;