import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'
import logger from 'redux-logger'

import reducer from './reducers';

const configureStore = () => {
    const middlewares = [];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(promise);
    }

    middlewares.push(logger);

    const store = createStore(
        reducer,
        applyMiddleware(...middlewares)
    );

    return store;
}

export default configureStore;