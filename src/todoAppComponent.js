import React, { Component } from 'react';

import store from './store.js';

let counter = 0;

export default class TodoApp extends Component {
    render() {
        return (
            <div>
                <button onClick={() => store.dispatch({
                    type: 'ADD_TODO',
                    text: 'Test',
                    id: counter++,
                    completed: false    
                })}>
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