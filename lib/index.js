/**
 *
 * @param {string} str
 * @returns {Array}
 */

function errorExtractor(str) {
  if (typeof(str) !== 'string') {
    throw new Error('Error message must be string')
  }

  const splitStr = '__'

  const splitIndex = str.indexOf(splitStr)

  if (splitIndex === -1) {
    throw new Error('Invalid string format to parse')
  }

  let statusCode = str.substring(0, splitIndex)
  const errMessage = str.substring(splitIndex+splitStr.length)

  if (!statusCode) {
    throw new Error('Status code must be defined')
  }

  if (!errMessage) {
    throw new Error('Error message must be define')
  }

  if (isNaN(statusCode)) {
    throw new Error('Status code must be an http status code')
  }

  statusCode = typeof statusCode === 'number' ? statusCode : parseInt(statusCode)

  return [statusCode, errMessage]
}

exports.errorExtractor = module.exports = errorExtractor
