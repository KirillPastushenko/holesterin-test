const reducer = (state = 21, action) => {
    console.log('reducer');
    switch (action.type) {
        case 'INIT_YEAR':
            return state + action.payload;
        case 'ADD_YEARS':
            return state + action.payload;
        default:
            return state;
    }
};

export default reducer;
