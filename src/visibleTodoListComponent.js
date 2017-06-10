import React, { Component } from 'react';

import TodoList from './todoListComponent';

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(
                todo => todo.completed
            );
        case 'SHOW_ACTIVE':
            return todos.filter(
                todo => !todo.completed
            );
        default:
            throw new Error(`Unknown filter type (${filter})`);
    }
}

export default class VisibleTodoListComponent extends Component {
    componentDidMount() {
        const { store } = this.props;
        this.unsubscribe = store.subscribe(() => 
            this.forceUpdate());
    }

    compnentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const { store } = this.props;

        const {todos, visibilityFilter} = store.getState();

        return (
         <TodoList
            todos={
                getVisibleTodos(
                    todos,
                    visibilityFilter
                )
            }
            onTodoClick={id =>
                store.dispatch({
                    type: 'TOGGLE_TODO',
                    id
                })
            } />
       );
    }
}