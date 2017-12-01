/**
 * lang.js is a learning works of Lodash/Lang
 */

// Casts `value` as an array if it's not one.
function castArray(...args) {
  if (!args.length) {
    return []
  }
  const value = args[0]
  return Array.isArray(value) ? value : [value]
}

export default {
  castArray
}
