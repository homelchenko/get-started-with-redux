import React, { Component } from 'react';

import store from './store.js';

import FilterLink from './FilterLink';

let nextTodoId = 0;

export default class TodoApp extends Component {
    render() {
        return (
            <div>
                <input ref={node => {
                    this.input = node
                }} />
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: nextTodoId++,
                        completed: false    
                    });
                    this.input.value = '';
                }}  >
                    Add Todo
                </button>
                <ul>
                    {this.props.todos.map(todo => 
                        <li key={todo.id}
                            onClick={() => {
                                store.dispatch({
                                    type: 'TOGGLE_TODO',
                                    id: todo.id
                                });
                            }}                            
                            style={{
                                textDecoration: todo.completed ? 
                                    'line-through' :
                                    'none'
                            }}>
                            {todo.text}
                        </li>
                    )}
                </ul>
                <p>
                    Show:
                    {' '}
                    <FilterLink
                        filter='SHOW_ALL'
                    >
                        All
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter='SHOW_ACTIVE'
                    >
                        Active
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter='SHOW_COMPLETED'
                    >
                        Completed
                    </FilterLink>
                </p>
            </div>
        )
    }
}