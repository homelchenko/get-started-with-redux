import fakeDatabase from '../predefineTodoList';

const delay = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
    delay(500).then(() => {
        switch(filter) {
            case 'all':
                return fakeDatabase.todos;
            case 'active':
                return getTodoByState(fakeDatabase.todos, false);
            case 'completed':
                return getTodoByState(fakeDatabase.todos, true);
            default:
                throw new Error(`Unknown filter ${filter}`);
        }
    });

const getTodoByState = (todos, isCompleted) => {
    const ids = todos.allIds.filter(id => todos.byId[id].completed === isCompleted);
    const byId = ids.reduce((byId, id) => byId[id] = todos.byId[id], {})

    return {
        allIds: ids,
        byId,
    };
}