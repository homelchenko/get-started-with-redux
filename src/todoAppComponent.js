import React from 'react';

import AddTodo from './addTodoComponent';
import VisibleTodoListComponent from './visibleTodoListComponent';
import Footer from './FooterComponent';

export default (props) => (
    <div>
        <AddTodo />
        <VisibleTodoListComponent
            { ...props }
        />
        <Footer />
    </div>
)