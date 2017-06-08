import React from 'react';

import AddTodo from './addTodoComponent';
import VisibleTodoList from './visibleTodoListComponent';
import Footer from './FooterComponent';

export default () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)