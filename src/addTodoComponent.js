import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from './actionCreators';

const addTodoComponent = ({ dispatch }) => {
    let input;

    return (
        <div>
            <input ref={node => {
                input = node
            }} />
            <button
                onClick={() => {
                    dispatch(
                        addTodo(input.value)
                    )
            }} >
                Add Todo
            </button>
        </div>
    );
}

const addTodoContainer = connect()(addTodoComponent);

export default addTodoContainer;