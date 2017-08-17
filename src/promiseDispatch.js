const addPromiseSupportToDispatch = (store) => {
    return promise(store)(store.dispatch);
}

export const promise = (store) => (next) => (action) => {
    if (typeof action.then === 'function') {
        return action.then(next);
    }

    return next;
}

export default addPromiseSupportToDispatch;