const fs = require('fs')

const ref = '-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const data = fs.readFileSync('./data1.csv').toString().trim().split('\n')
  .map(s => [s.slice(0, s.length / 2), s.slice(s.length / 2)])
  .reduce((acc, [s1, s2], i) => (
    (acc[i] = s1.split('').filter(c => s2.indexOf(c) > -1)[0]), acc
  ), [])
  .reduce((acc, c) => (acc += ref.indexOf(c)), 0)

console.log(data)
