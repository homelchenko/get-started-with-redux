const addPromiseSupportToDispatch = (store) => {
    const rawDispatch = store.dispatch;

    return (action) => {
        if (typeof action.then === 'function') {
            return action.then(rawDispatch);
        }

        return rawDispatch;
    }
}

export default addPromiseSupportToDispatch;