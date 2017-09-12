import fakeDatabase from '../fakeDatabase';

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
    delay(500).then(() => {
        switch(filter) {
            case 'all':
                return fakeDatabase.todos;
            case 'active':
                return fakeDatabase.todos.filter(todo => !todo.completed);
            case 'completed':
                return fakeDatabase.todos.filter(todo => todo.completed);
            default:
                throw new Error(`Unknown filter ${filter}`);
        }
    });

export const addTodo = (text) => {
    return new Promise((resolve) => {
        resolve(fakeDatabase.addTodo(text));
    });
}

export const toggleTodo = (id) => {
    return new Promise((resolve) => {
        const todo = fakeDatabase.toggleTodo(id);
        resolve(todo);
    });
}