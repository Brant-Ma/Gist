/**
 * lang.js is a learning works of Lodash/Lang
 */

// Casts `value` as an array if it's not one.
function castArray(...args) {
  if (!args.length) {
    return []
  }
  return Array.isArray(args[0]) ? args[0] : [args[0]]
}

// Performs a comparison between two values to determine if they are equivalent.
function eq(a, b) {
  return (a === b) || (a !== a && b !== b)
}

export default {
  castArray,
  eq,
}
