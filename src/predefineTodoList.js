import { v4 } from 'node-uuid';

const predefineTodoList = () => {
    const buyMilkTodo = {
        type: 'ADD_TODO',
        id: v4(),
        text: 'Buy milk',
        completed: false
    };

    const doDishesTodo = {
        type: 'ADD_TODO',
        id: v4(),
        text: 'Do the dishes',
        completed: true
    };

    const todos = [buyMilkTodo, doDishesTodo];

    const allIds = todos.map(todo => todo.id);
    const byId = todos
        .map(todo => ({
            id: todo.id,
            item: todo
        }))
        .reduce((byId, todo) => {
            byId[todo.id] = todo.item;

            return byId;
        }, {});

    return ({
        todos: {
            allIds,
            byId
        }
    });
}

export default predefineTodoList;