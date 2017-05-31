import todos from './todoReducer';
import visibilityFilter from './visibilityFilter';

const todoAppReducer = (state = {}, action) => {
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    };
};

export default todoAppReducer;