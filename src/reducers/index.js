import { combineReducers } from 'redux';

import byId, * as fromById from './byId';
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
    return ids.map(id => fromById.getTodo(state, id));
}

export const getIsFetching = (state, filter) => {
    return fromCreateList.getIsFetching(state.listByFilter[filter]);
}

export const getErrorMessage = (state, filter) => {
    return fromCreateList.getErrorMessage(state.listByFilter[filter]);
}