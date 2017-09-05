import { combineReducers } from 'redux';

const createList = (filter) => {
    const ids = (state = [], action) => {
        if (action.filter !== filter)
            return state;

        switch(action.type) {
            case 'RECEIVE_TODOS':
                return action.response.map(todo => todo.id);
            default:
                return state;
        }
    }

    const isFetching = (state = false, action) => {
        if (action.filter !== filter)
            return state;

        switch(action.type) {
            case 'REQUEST_TODOS':
                return true;
            case 'RECEIVE_TODOS':
                return false;
            default:
                return state;
        }
    }

    const errorMessage = (state = null, action) => {
        if (action.filter !== filter)
            return state;

        switch(action.type) {
            case 'RECEIVE_TODOS':
                return null;
            default:
                return "Boom!";
        }
    }

    return combineReducers({
        ids,
        isFetching,
        errorMessage
    });
};

export default createList;

export const getIds = (state) => state.ids;

export const getIsFetching = (state) => state.isFetching;

export const getErrorMessage = (state) => state.errorMessage;