import React from 'react';

import store from './store';

export default () => {
    let input;

    let nextTodoId = 0;

    return (
        <div>
            <input ref={node => {
                input = node
            }} />
            <button
                onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        id: nextTodoId++,
                        text: input.value,
                        completed: false
                    })
            }} >
                Add Todo
            </button>
        </div>
    );
}