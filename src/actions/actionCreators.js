import { v4 } from 'node-uuid';

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

export const receiveTodos = (filter, todos) => ({
    type: 'RECEIVE_DATA',
    todos,
    filter
})