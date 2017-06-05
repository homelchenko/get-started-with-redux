import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';

import TodoApp from './todoAppComponent';

store.dispatch({
    type: 'ADD_TODO',
    text: 'Buy milk',
    completed: false
});

store.dispatch({
    type: 'ADD_TODO',
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