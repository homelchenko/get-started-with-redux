const addLoggingToDispatch = (store) => {
    if (!console.group) {
        return store.dispatch;
    }
    
    const rawDispatch = store.dispatch;
    
    return (action) => {
        console.group(action.type);
        console.log('%c prev state', 'color: gray', store.getState());
        console.log('%c action', 'color: blue', action);
        const returnValue = rawDispatch(action);
        console.log('%c next state', 'color: green', store.getState());
        console.groupEnd(action.type);

        return returnValue;
    };
}

export default addLoggingToDispatch;