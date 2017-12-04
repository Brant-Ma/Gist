/**
 * lang.js is a learning works of Lodash/Lang
 */

// 值转数组
let castArray = (...args) => {
  if (!args.length) {
    return []
  }
  return Array.isArray(args[0]) ? args[0] : [args[0]]
}

// 等值比较
let eq = (a, b) => (a === b) || (a !== a && b !== b)

// 大小比较
let _createRelationalOperation = (operator) => {
  return (a, b) => {
    if (!(typeof a === 'string' && typeof b === 'string')) {
      a = +a
      b = +b
    }
    return operator(a, b)
  }
}

let gt = _createRelationalOperation((a, b) => a > b)

let gte = _createRelationalOperation((a, b) => a >= b)

let lt = _createRelationalOperation((a, b) => a < b)

let lte = _createRelationalOperation((a, b) => a <= b)

export default {
  castArray,
  eq,
  gt,
  gte,
  lt,
  lte,
}
