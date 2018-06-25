"use strict";

module.exports = function create_acronym(sentence, callback) {
  return new Promise((resolve, reject) => {
    if (sentence.length === 0) {
      reject('String, Please! e.g. "international business machine"')
      return callback('String, Please! e.g. "international business machine"')
    } else if (typeof sentence === 'function') {
      callback = sentence

      reject('¯\\_(ツ)_/¯')
      return callback('¯\\_(ツ)_/¯')
    } else {
      const words = sentence.split(' ')
      const acronym = words.map((word) => word[0])

      resolve(acronym.join(''))
      return callback(null, create_acronym.join(''))
    }
  })
}
