const fs = require('fs')

const data = fs.readFileSync('linux_env', 'utf8')
const lines = data.split(/\r?\n/)
const envVars = []
lines.map((line, i) => {
  const separator = line.indexOf('=')

  //   console.log(i, separator)
  envVars[i] = {
    title: line
      .slice(0, separator)
      .toLowerCase()
      .replace('_', ' ')
      .toString(),
    vars: line.slice(separator + 1, line.length)
  }
  // envVars = [...envVars, ]
})
// console.log('lines:', typeof lines)
// lines.map(line => {
//   // console.log(line)
//   console.log(line.split(':').join('\n\t'))
// })
console.log(envVars)
module.exports = envVars
