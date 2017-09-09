import { todos } from '../predefineTodoList';

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
    delay(500).then(() => {
        switch(filter) {
            case 'all':
                return todos;
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
            default:
                throw new Error(`Unknown filter ${filter}`);
        }
    });

let id = 0;

export const addTodo = (text) => {
    id++;

    const newTodo = {
        id,
        text,
        completed: false
    }

    return new Promise((resolve) => {
        todos.push(newTodo);
        resolve(newTodo);
    });
}