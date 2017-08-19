import { createStore } from 'redux';

import logger from './loggingDispatch';
import promise from './promiseDispatch';
import reducer from './reducers';

const wrapDispatchWithMiddlewares = (store, middlewares) => {
    middlewares.slice().reverse().forEach(middleware => {
        store.dispatch = middleware(store)(store.dispatch);
    });
}

const configureStore = () => {
    const store = createStore(
        reducer);

    const middlewares = [];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(promise);
    }

    middlewares.push(logger);

    wrapDispatchWithMiddlewares(store, middlewares);

    return store;
}

export default configureStore;