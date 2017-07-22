import React from 'react';

import AddTodo from './addTodoComponent';
import VisibleTodoList from './visibleTodoList';
import Footer from './FooterComponent';

export default ({
    store
}) => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)