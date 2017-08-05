import { createStore } from 'redux';

import addLoggingToDispatch from './loggingDispatch';
import reducer from './reducers';
import { fetchTodos } from './api/';

fetchTodos('all').then(todos => 
    console.log(todos)
);

const configureStore = () => {
    const store = createStore(
        reducer);

    if (process.env.NODE_ENV !== 'production') {
        store.dispatch = addLoggingToDispatch(store);
    }

    return store;
}

export default configureStore;