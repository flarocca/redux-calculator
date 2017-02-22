const operand = (state = {}, action) => {
  if (state.showResult) {
    return Object.assign({}, state, {
      value: action.operand.toString(),
      showResult: false,
      lastInput: 'NU'
    });
  } else {
    return Object.assign({}, state, {
      value: parseFloat((state.value || "0").toString() + action.operand.toString(), 10).toString(),
      lastInput: 'NU'
    });
  }
}

export default operand;