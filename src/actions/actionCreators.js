import { v4 } from 'node-uuid';

import * as api from '../api';
import { getIsFetching } from '../reducers';

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: v4(),
    text,
    completed: false
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});

const requestTodos = (filter) => ({
    type: 'FETCH_TODOS_REQUEST',
    filter
});

const receiveTodos = (filter, response) => ({
    type: 'FETCH_TODOS_SUCCESS',
    filter,
    response,
})

export const fetchTodos = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter)) {
        return Promise.resolve();
    }

    dispatch(requestTodos(filter));

    return api.fetchTodos(filter).then(response =>
        dispatch(receiveTodos(filter, response))
    );
}