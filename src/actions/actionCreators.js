import { v4 } from 'node-uuid';

const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: v4(),
    text,
    completed: false
});

const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});

const receiveTodos = (filter, todos) => ({
    type: 'RECEIVE_DATA',
    todos,
    filter
})

export { addTodo, toggleTodo, receiveTodos };