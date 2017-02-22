const operand = (state = {}, action) => {
  if (state.showResult) {
    return Object.assign({}, state, {
      value: action.operand.toString(),
      showResult: false,
      lastInput: 'NU'
    })
  } else {
    let value = (state.value || '0') + action.operand
    if (state.value === '0' && action.operand === '0') {
      value = '0'
    }

    return Object.assign({}, state, {
      value: value,
      lastInput: 'NU'
    })
  }
}

export default operand
