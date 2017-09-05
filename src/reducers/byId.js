const byId = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH_TODOS_SUCCESS':
            const newState = { ...state };

            action.response.forEach(todo =>
                newState[todo.id] = todo
            );

            return newState;
        default:
            return state;
    }
};

export default byId;

export const getTodo = (state, id) => state.byId[id];