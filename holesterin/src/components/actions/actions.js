export const setInitialAge = (initialAge) => {
    return {
      type: 'SET_INITIAL_AGE',
      payload: initialAge
    };
};

export const addYears = (n) => {
    return {
      type: 'ADD_YEARS',
      payload: n
    };
};

export const removeYears = (n) => {
    return {
      type: 'REMOVE_YEARS',
      payload: n
    };
};