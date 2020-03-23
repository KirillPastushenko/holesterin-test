const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_INITIAL_AGE':
        return state + action.payload;
        case 'ADD_YEARS':
        return state + action.payload;
        case 'REMOVE_YEARS':
        return state - action.payload;
        default:
        return state;
    }
};

export default reducer;
