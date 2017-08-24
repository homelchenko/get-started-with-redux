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
    idsByFilter,
})

export default todos;

const getAllTodos = (state, filter) => {
    return state.idsByFilter[filter].map(id => state.byId[id]);
};

export const getVisibleTodos = (state, filter) => {
    switch (filter) {
        case 'all':
            return getAllTodos(state, 'allIds');
        case 'completed':
            return getAllTodos(state, 'completedIds');
        case 'active':
            return getAllTodos(state, 'activeIds');
        default:
            throw new Error(`Unknown filter type (${filter})`);
    }
}