/**
 * math.js is a learning works of Lodash/Math
 */

// 四则运算
let _createMathOperation = (action, value) => {
  return (a, b) => {
    if (a === undefined && b === undefined) return value
    let ret
    if (a !== undefined) ret = a
    if (b !== undefined) {
      if (ret === undefined) return b
      ret = action(a, b)
    }
    return ret
  }
}

let add = _createMathOperation((a, b) => a + b, 0)

let subtract = _createMathOperation((a, b) => a - b, 0)

let multiply = _createMathOperation((a, b) => a * b, 1)

let divide = _createMathOperation((a, b) => a / b, 1)

// 精度运算
let _createRound = (type) => {
  return (number, precision = 0) => {
    let ret = Math[type](number + 'e' + precision)
    return +(ret + 'e' + (-precision))
  }
}

let ceil = _createRound('ceil')

let floor = _createRound('floor')

let round = _createRound('round')

export default {
  add,
  ceil,
  divide,
  floor,
  multiply,
  round,
  subtract,
}
