import React, { Component } from 'react';

import store from './store.js';

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
                        <li key={todo.id}>
                            {todo.text}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}