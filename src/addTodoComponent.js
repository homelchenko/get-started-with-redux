import React from 'react';
import { PropTypes } from 'prop-types';

const addTodoComponent = (props, { store }) => {
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

addTodoComponent.contextTypes = {
    store: PropTypes.object
}

export default addTodoComponent;