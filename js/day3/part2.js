const fs = require('fs')

const ref = '-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const chunk = (arr, size) =>
  arr.length > size
    ? [arr.slice(0, size), ...chunk(arr.slice(size), size)]
    : [arr]

const data = fs.readFileSync('./data1.csv').toString().trim().split('\n')
const result = chunk(data, 3)
  .reduce((acc, [s1, s2, s3], i) => (
    (acc[i] = s1.split('').filter(c => s2.indexOf(c) > -1 && s3.indexOf(c) > -1)[0]), acc
  ), [])
  .reduce((acc, c) => (acc += ref.indexOf(c)), 0)

console.log(result)
