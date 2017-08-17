const addPromiseSupportToDispatch = (store) => {
    const next = store.dispatch;

    return (action) => {
        if (typeof action.then === 'function') {
            return action.then(next);
        }

        return next;
    }
}

export default addPromiseSupportToDispatch;