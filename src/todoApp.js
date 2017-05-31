import { combineReducers } from 'redux';

import todos from './todoReducer';
import visibilityFilter from './visibilityFilter';

const reducer = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter
});

export { reducer };

export default reducer;