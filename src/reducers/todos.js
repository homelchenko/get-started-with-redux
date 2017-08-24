import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
    switch(action.type) {
        case 'RECEIVE_TODOS':
            const newState = { ...state };

            action.response.forEach(todo =>
                newState[todo.id] = todo
            );

            return newState;
        default:
            return state;
    }
};

const allIds = (state = [], action) => {
    if (action.filter !== 'all')
        return state;

    switch(action.type) {
        case 'RECEIVE_TODOS':
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
};

const activeIds = (state = [], action) => {
    if (action.filter !== 'active')
        return state;

    switch(action.type) {
        case 'RECEIVE_TODOS':
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
}

const completedIds = (state = [], action) => {
    if (action.filter !== 'completed')
        return state;

    switch(action.type) {
        case 'RECEIVE_TODOS':
            return action.response.map(todo => todo.id);
        default:
            return state;
    }
}

const idsByFilter = combineReducers({
    allIds,
    activeIds,
    completedIds,
});

const todos = combineReducers({
    byId,
    allIds,
    idsByFilter,
})

export default todos;

const getAllTodos = (state) => state.allIds.map(id => state.byId[id]);

export const getVisibleTodos = (state, filter) => {
    const allTodos = getAllTodos(state);

    switch (filter) {
        case 'all':
            return allTodos;
        case 'completed':
            return allTodos.filter(
                todo => todo.completed
            );
        case 'active':
            return allTodos.filter(
                todo => !todo.completed
            );
        default:
            throw new Error(`Unknown filter type (${filter})`);
    }
}