import { v4 } from 'node-uuid';

const buyMilkTodo = {
    id: v4(),
    text: 'Buy milk',
    completed: false
};

const doDishesTodo = {
    id: v4(),
    text: 'Do the dishes',
    completed: true
};

export const todos = [buyMilkTodo, doDishesTodo];

const fakedatabase = {
    todos,
    addTodo: (text) => {
        const newTodo = {
            id: v4(),
            text,
            completed: false
        }

        todos.push(newTodo);

        return newTodo;
    }
}

export default fakedatabase;