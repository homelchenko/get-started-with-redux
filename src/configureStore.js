import { createStore, applyMiddleware } from 'redux';

import logger from './loggingDispatch';
import promise from './promiseDispatch';
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