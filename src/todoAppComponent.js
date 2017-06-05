import React, { Component } from 'react';

import store from './store';

import AddTodo from './addTodoComponent';
import TodoList from './todoListComponent';
import FilterLink from './FilterLink';

let nextTodoId = 0;

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

export default class TodoApp extends Component {
    render() {
        const {
            todos,
            visibilityFilter
        } = this.props;

        const visibleTodos = getVisibleTodos(
            todos,
            visibilityFilter
        );

        return (
            <div>
                <AddTodo onAddClick={(text) =>
                    store.dispatch({
                        type: 'ADD_TODO',
                        text,
                        id: nextTodoId++,
                        completed: false    
                    })
                } />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={id =>
                        store.dispatch({
                            type: 'TOGGLE_TODO',
                            id
                        })
                    }
                />
                <p>
                    Show:
                    {' '}
                    <FilterLink
                        filter='SHOW_ALL'
                        currentFilter={visibilityFilter}
                    >
                        All
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter='SHOW_ACTIVE'
                        currentFilter={visibilityFilter}
                    >
                        Active
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter='SHOW_COMPLETED'
                        currentFilter={visibilityFilter}
                    >
                        Completed
                    </FilterLink>
                </p>
            </div>
        )
    }
}