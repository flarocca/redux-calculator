import func from './func'
import operand from './operand'
import operation from './operation'

const initialState = {
  value: '0',
  result: 0,
  history: [],
  operation: (val1, val2) => { return val2 },
  showResult: false,
  mustReset: false,
  lastInput: null
}

const operations = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_OPERATOR':
      return operation(state, initialState, action)
    case 'ADD_FUNCTION':
      return func(state, initialState, action)
    case 'ADD_OPERAND':
      return operand(state, action)
    default:
      return state
  }
}

export default operations
