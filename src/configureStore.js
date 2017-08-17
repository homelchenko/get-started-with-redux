import { createStore } from 'redux';

import logger from './loggingDispatch';
import { promise } from './promiseDispatch';
import reducer from './reducers';

const wrapDispatchWithMiddleware = (store, middlewares) => {
    middlewares.forEach(middleware => {
        store.dispatch = middleware(store)(store.dispatch);
    });
}

const configureStore = () => {
    const store = createStore(
        reducer);

    const middleware = [];

    if (process.env.NODE_ENV !== 'production') {
        middleware.push(logger);
    }

    middleware.push(promise);

    wrapDispatchWithMiddleware(store, middleware);

    return store;
}

export default configureStore;