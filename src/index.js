import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';

import Provider from './providerComponent';
import TodoApp from './todoAppComponent';

store.dispatch({
    type: 'ADD_TODO',
    id: -2,
    text: 'Buy milk',
    completed: false
});

store.dispatch({
    type: 'ADD_TODO',
    id: -1,
    text: 'Do the dishes',
    completed: true
});

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);