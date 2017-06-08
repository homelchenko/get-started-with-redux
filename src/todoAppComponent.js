import React from 'react';

import AddTodo from './addTodoComponent';
import VisibleTodoList from './visibleTodoListComponent';
import Footer from './FooterComponent';

export default (props) => (
    <div>
        <AddTodo />
        <VisibleTodoList
            { ...props }
        />
        <Footer />
    </div>
)