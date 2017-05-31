import { combineReducers } from './combineReducers';

import todos from './todoReducer';
import visibilityFilter from './visibilityFilter';

const reducer = combineReducers({
    todos,
    visibilityFilter
});

export { reducer };

export default reducer;