const operation = (state = {}, initialState, action) => {
  let op = null;

  switch (action.operator) {
    case '+':
      op = (val1, val2) => { return parseInt(val1, 10) + parseInt(val2, 10) };
      break;

    case '-':
      op = (val1, val2) => { return parseInt(val1, 10) - parseInt(val2, 10) };
      break;

    case 'x':
      op = (val1, val2) => { return parseInt(val1, 10) * parseInt(val2, 10) };
      break;

    case '/':
      op = (val1, val2) => { return parseInt(val1, 10) / parseInt(val2, 10) };
      break;

    case '=':
      return Object.assign({}, initialState, {
        value: state.operation(state.result, state.value),
        showResult: true
      });

    default:
      return state
  }

  if (state.lastInput === 'OP') {
    let newHistory = state.history;
    newHistory[newHistory.length - 1] = action.operator;

    return Object.assign({}, state, {
      operation: op,
      result: state.result,
      lastOperator: action.operator,
      value: state.value,
      history: newHistory,
      showResult: true,
      lastInput: 'OP'
    });
  }

  let history = [
    ...state.history,
    state.value,
    action.operator
  ];

  return Object.assign({}, state, {
    operation: op,
    result: state.operation(state.result, state.value),
    lastOperator: action.operator,
    value: state.operation(state.result, state.value).toString(),
    history: history,
    showResult: true,
    lastInput: 'OP'
  });
}

export default operation;