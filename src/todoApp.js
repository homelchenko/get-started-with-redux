import React from 'react';

import AddTodo from './components/addTodo';
import VisibleTodoList from './visibleTodoList';
import Footer from './Footer';

export default ({
    store,
    match: { params }
}) => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)