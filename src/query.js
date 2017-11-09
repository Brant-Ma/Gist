/**
 * query.js is a query string conversion tool
 */

let getPureQuery = () => {
  let str = location.search
  return str.length ? str.slice(1) : ''
}

let isPrimitive = (val) => {
  return val === null || typeof val !== 'object'
}

let basicValue2String = (val) => {
  switch (typeof val) {
    case 'string':
      return val
      break
    case 'number':
      return Number(val)
      break
    case 'boolean':
      return val ? 'true' : 'false'
      break
    default:
      return ''
  }
}

// convert str to obj
let decode = () => {
  let str = getPureQuery()
  let obj = {}

  if (!str.length) {
    return obj
  }

  let pairs = str.split('&')

  for (let i = 0; i < pairs.length; i++) {
    let kv = pairs[i].split('=')
    let k = decodeURIComponent(kv[0])
    let v = decodeURIComponent(kv[1])
    obj[k] = v
  }

  return obj
}

// convert obj to str
let encode = (obj) => {
  if (isPrimitive(obj) || Array.isArray(obj)) {
    throw new TypeError('the parameter should be an object')
  }

  return Object.keys(obj).map((key) => {
    let head = encodeURIComponent(basicValue2String(key)) + '='

    if (isPrimitive(obj[key])) {
      return head + encodeURIComponent(basicValue2String(obj[key]))
    }

    throw new Error('the query string must not contain object value')
  }).join('&')
}

// get value by key
let extract = (key) => {
  if (!isPrimitive(key)) {
    throw new TypeError('the parameter should not be reference type')
  }

  let obj = decode(getPureQuery())
  let val = obj[basicValue2String(key)]
  return val ? String(val) : ''
}

export default {
  decode,
  encode,
  extract,
  parse: decode,
  stringify: encode,
  getParaValue: extract,
}
