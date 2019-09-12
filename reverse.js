const line = 'nH'

if (line.length < 1 || line.length > 10000) return null
console.log(line.split('').reverse().join(''))