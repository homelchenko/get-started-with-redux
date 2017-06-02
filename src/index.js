import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';

import TodoApp from './todoAppComponent';

const render = () => {
    ReactDOM.render(
        <TodoApp
            todos={store.getState().todos }
        />,
        document.getElementById('root')
    );
}

store.subscribe(() => render());
render();