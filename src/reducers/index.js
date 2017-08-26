import { combineReducers } from 'redux';

import byId from './byId';
import createList from './createList';

const allIds = createList('all');

const activeIds = createList('active');

const completedIds = createList('completed');

const idsByFilter = combineReducers({
    all: allIds,
    active: activeIds,
    completed: completedIds,
});

const todos = combineReducers({
    byId,
    idsByFilter,
})

export default todos;

export const getVisibleTodos = (state, filter) => {
    const ids = state.idsByFilter[filter];
    return ids.map(id => state.byId[id]);
}