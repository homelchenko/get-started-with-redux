import { combineReducers } from 'redux';

import byId from './byId';
import createList, * as fromCreateList from './createList';

const listByFilter = combineReducers({
    all: createList('all'),
    active: createList('active'),
    completed: createList('completed'),
});

const todos = combineReducers({
    byId,
    listByFilter,
})

export default todos;

export const getVisibleTodos = (state, filter) => {
    const ids = fromCreateList.getIds(state.listByFilter[filter]);
    return ids.map(id => state.byId[id]);
}