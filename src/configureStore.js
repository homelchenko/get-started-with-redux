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

    const middleware = [];

    if (process.env.NODE_ENV !== 'production') {
        middleware.push(promise);
    }

    middleware.push(logger);

    wrapDispatchWithMiddlewares(store, middleware);

    return store;
}

export default configureStore;