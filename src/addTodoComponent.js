import React from 'react';

export default ({
    store
}) => {
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