import React from 'react';

import store from './store';

import AddTodo from './addTodoComponent';
import VisibleTodoListComponent from './visibleTodoListComponent';
import Footer from './FooterComponent';

let nextTodoId = 0;

export default (props) => (
    <div>
        <AddTodo onAddClick={(text) =>
            store.dispatch({
                type: 'ADD_TODO',
                text,
                id: nextTodoId++,
                completed: false
            })
        } />
        <VisibleTodoListComponent
            { ...props }
        />
        <Footer />
    </div>
)