export const logger = store => next => action => {
    console.log("Action Dispatched:", action);
    const result = next(action);
    console.log("Updated State:", store.getState());
    return result;
};