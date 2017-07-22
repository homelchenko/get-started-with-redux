import React from 'react';

import AddTodo from './addTodo';
import VisibleTodoList from './visibleTodoList';
import Footer from './Footer';

export default ({
    store,
    match: { params }
}) => (
    <div>
        <AddTodo />
        <VisibleTodoList
            filter={params.filter || 'all'}
        />
        <Footer />
    </div>
)