const addLoggingToDispatch = (store) => {
    return logging(store)(store.dispatch);
}

export const logging = (store) => {
    return (next) => {
        if (!console.group) {
            return next;
        }

        return (action) => {
            console.group(action.type);
            console.log('%c prev state', 'color: gray', store.getState());
            console.log('%c action', 'color: blue', action);
            const returnValue = next(action);
            console.log('%c next state', 'color: green', store.getState());
            console.groupEnd(action.type);

            return returnValue;
        }
    };
}

export default addLoggingToDispatch;