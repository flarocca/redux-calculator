const func = (state = {}, initialState, action) => {
  switch (action.func) {
    case 'CLEAR':
      return initialState;
    default:
      return state;
  }
}

export default func;