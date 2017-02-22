import getMathOperation from './getMathOperation'

const operation = (state = {}, initialState, action) => {
  if (action.operator === '=') {
    return Object.assign({}, initialState, {
      value: state.operation(state.result, state.value),
      showResult: true
    })
  }

  let op = getMathOperation(action.operator)
  let result = state.operation(state.result, state.value)
  let value = result.toString()
  let history = [
    ...state.history,
    state.value,
    action.operator
  ]

  if (state.lastInput === 'OP') {
    history = state.history
    history[history.length - 1] = action.operator
    result = state.result
    value = state.value
  }

  return Object.assign({}, state, {
    operation: op,
    result: result,
    value: value,
    history: history,
    showResult: true,
    lastInput: 'OP'
  })
}

export default operation
