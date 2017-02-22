const getMathOperation = (operator) => {
  switch (operator) {
    case '+':
      return (val1, val2) => { return parseFloat(val1, 10) + parseFloat(val2, 10) }

    case '-':
      return (val1, val2) => { return parseFloat(val1, 10) - parseFloat(val2, 10) }

    case 'x':
      return (val1, val2) => { return parseFloat(val1, 10) * parseFloat(val2, 10) }

    case '/':
      return (val1, val2) => { return parseFloat(val1, 10) / parseFloat(val2, 10) }

    default:
      return null
  }
}

export default getMathOperation
