const operand = (state = {}, action) => {
  if (state.showResult) {
    return Object.assign({}, state, {
      value: action.operand.toString(),
      showResult: false,
      lastInput: 'NU'
    })
  } else {
    let value = (state.value || '0') + action.operand
    if (state.value === '0') {
      if (action.operand === '.') {
        value = '0.'
      } else if (action.operand === '0') {
        value = '0'
      } else {
        value = action.operand
      }
    }

    return Object.assign({}, state, {
      value: value,
      lastInput: 'NU'
    })
  }
}

export default operand
