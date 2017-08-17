import { createStore } from 'redux';

import addLoggingToDispatch, { logging } from './loggingDispatch';
import addPromiseSupportToDispatch, { promise } from './promiseDispatch';
import reducer from './reducers';

const configureStore = () => {
    const store = createStore(
        reducer);

    const middleware = [];

    if (process.env.NODE_ENV !== 'production') {
        store.dispatch = addLoggingToDispatch(store);
        middleware.push(logging);
    }

    store.dispatch = addPromiseSupportToDispatch(store);
    middleware.push(promise);

    return store;
}

export default configureStore;