const initialState = {
  value: "0",
  result: 0,
  history: "",
  lastOperator: null
}

const getResult = (x, y, op) => {
  return op(x, y);
}

const operation = (state = {}, action) => {
  let history = null;
  let result = 0;

  if (!state.value)
    return state;
  if (state.lastOperator)
    return state;
  if (!state.result)
    return Object.assign({}, state, {
      result: parseInt(state.value, 10),
      lastOperator: action.operator,
      value: "",
      history: state.history + state.value
    });


  switch (action.operator) {
    case '+':
      result = getResult(parseInt((state.result || 0), 10), parseInt(state.value, 10), (val1, val2) => { return val1 + val2 });
      history = state.history + " + " + state.value;
      break;

    case '-':
      result = getResult(parseInt((state.result || 0), 10), parseInt(state.value, 10), (val1, val2) => { return val1 - val2 });
      history = state.history + " - " + state.value;
      break;

    case 'x':
      result = getResult(parseInt((state.result || 0), 10), parseInt(state.value, 10), (val1, val2) => { return val1 * val2 });
      history = state.history + " * " + state.value;
      break;

    case '/':
      if (!this.state.operand || this.state.result === 0)
        return state;

      result = getResult(parseInt((state.result || 0), 10), parseInt(state.value, 10), (val1, val2) => { return val1 / val2 });
      history = state.history + " / " + state.value;
      break;

    case '=':
      return Object.assign({}, state, {
        result: getResult(parseInt((state.result || 0), 10), parseInt(state.value, 10), (val1, val2) => { return val1 / val2 }),
        lastOperator: action.operator,
        value: result.toString(),
        history: history,
        showResult: false,
        mustReset: true
      });

    default:
      return state
  }

  return Object.assign({}, state, {
    result: result,
    lastOperator: action.operator,
    value: result.toString(),
    history: history,
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