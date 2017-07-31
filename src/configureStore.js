import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import addLoggingToDispatch from './loggingDispatch';
import predefineTodoList from './predefineTodoList';
import reducer from './reducers';
import { loadState, saveState } from './localStorage';

let persistedState = loadState();

if (!persistedState) {
    persistedState = predefineTodoList();
    saveState(persistedState);
}

const configureStore = () => {
    const store = createStore(
        reducer,
        persistedState);

    if (process.env.NODE_ENV !== 'production') {
        store.dispatch = addLoggingToDispatch(store);
    }

    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos
        });
    }, 1000));

    return store;
}

export default configureStore;