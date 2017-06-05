import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';

import TodoApp from './todoAppComponent';

store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Buy milk',
    completed: false
});

store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Do the dishes',
    completed: true
});

const render = () => {
    ReactDOM.render(
        <TodoApp
            { ...store.getState()}
        />,
        document.getElementById('root')
    );
}

store.subscribe(() => render());
render();