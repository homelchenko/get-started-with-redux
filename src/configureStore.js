import { createStore } from 'redux';

import addLoggingToDispatch from './loggingDispatch';
import addPromiseSupportToDispatch from './promiseDispatch';
import reducer from './reducers';

const configureStore = () => {
    const store = createStore(
        reducer);

    if (process.env.NODE_ENV !== 'production') {
        store.dispatch = addLoggingToDispatch(store);
    }

    store.dispatch = addPromiseSupportToDispatch(store);

    return store;
}

export default configureStore;