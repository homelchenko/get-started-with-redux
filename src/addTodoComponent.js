import React from 'react';
import { connect } from 'react-redux';

const addTodoComponent = ({ dispatch }) => {
    let input;

    let nextTodoId = 0;

    return (
        <div>
            <input ref={node => {
                input = node
            }} />
            <button
                onClick={() => {
                    dispatch({
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

const addTodoContainer = connect()(addTodoComponent);

export default addTodoContainer;