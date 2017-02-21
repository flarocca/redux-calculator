export const addOperator = (operator) => {
  return {
    type: 'ADD_OPERATOR',
    operator
  }
}

export const addOperand = (operand) => {
  return {
    type: 'ADD_OPERAND',
    operand
  }
}

export const addFunction= (func) => {
  return {
    type: 'ADD_FUNCTION',
    func
  }
}