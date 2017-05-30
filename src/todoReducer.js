const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
        ];
        case 'TOGGLE_TODO':
            return state.map(todo => todo(todo, action));
        default:
            return state;
    }

};

const todo = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: action.completed
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id){
                return state;
            }
            
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }    
};

export default todos;

export { todo };