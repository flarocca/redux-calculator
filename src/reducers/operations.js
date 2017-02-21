const initialState = {
  value: "0",
  result: 0,
  history: "",
  lastOperator: null,
  operation: () => { return 0 },
  showResult: false,
  mustReset: false
}

const operation = (state = {}, action) => {
  let history = null;
  let op = null;
  let lastOperator = action.lastOperator;

  if (!state.value)
    return state;
  if (state.lastOperator)
    return state;

  switch (action.operator) {
    case '+':
      op = () => { return parseInt((state.result || 0), 10) + parseInt(state.value, 10) };
      history = state.value + "+";
      break;

    case '-':
      op = () => { return parseInt((state.result || 0), 10) - parseInt(state.value, 10) };
      history = state.value + "-";
      break;

    case 'x':
      op = () => { return parseInt((state.result || 0), 10) * parseInt(state.value, 10) };
      history = state.value + "*";
      break;

    case '/':
      if (!this.state.operand || this.state.result === 0)
        return state;
      op = () => { return parseInt((state.result || 0), 10) / parseInt(state.value, 10) };
      history = state.value + "=";
      break;

    case '=':
      op = () => { return parseInt((state.result || 0), 10) };
      history = state.value;
      lastOperator = null;
      break;

    default:
      return state
  }

  return Object.assign({}, state, {
    operation: op,
    result: state.operation(state.result, state.value),
    lastOperator: lastOperator,
    value: state.operation(state.result, state.value).toString(),
    history: state.history + history,
    showResult: true
  });
}

const operations = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_OPERATOR':
      return operation(state, action);
    case 'ADD_OPERAND':
      if (state.mustReset)
        return Object.assign({}, state, {
          result: 0,
          lastOperator: null,
          value: parseInt((state.value || "0").toString() + action.operand.toString(), 10).toString(),
          history: "",
          showResult: false,
          mustReset: false
        });
      if (state.showResult)
        return Object.assign({}, state, {
          value: parseInt(action.operand, 10).toString(),
          lastOperator: null,
          showResult: false
        });
      else
        return Object.assign({}, state, {
          value: parseInt((state.value || "0").toString() + action.operand.toString(), 10).toString(),
          lastOperator: null
        });

    default:
      return state;
  }
}

export default operations;