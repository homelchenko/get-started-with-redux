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

export default byId;