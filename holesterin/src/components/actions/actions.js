export const setInitialAge = (initialAge) => {
    return {
      type: 'SET_INITIAL_AGE',
      payload: initialAge
    };
};

export const addYears = (n) => {
    console.log('action addYears', n)
    return {
      type: 'ADD_YEARS',
      payload: n
    };
};

 