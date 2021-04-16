const fs = require('fs')

const data = fs.readFileSync('linux_env', 'utf8')
const lines = data.split(/\r?\n/)
// console.log(lines.length)
const envVars = []
lines.map((line, i) => {
  const separator = line.indexOf('=')

  //   console.log(i, separator)
  envVars[i] = {
    
    title: line
    .slice(0, separator)
    .toString()
    .toLowerCase()
    .split('_').join (' '),
    vars: line.slice(separator + 1, line.length)
    
  }
  // envVars = [...envVars, ]
})

// console.log('lines:', typeof lines)
// lines.map(line => {
//   // console.log(line)
//   console.log(line.split(':').join('\n\t'))
// })
// lines.map(line => console.log(line))
console.log()
envVars.pop()
envVars.pop()
envVars.pop()
envVars.pop()
envVars.pop()
envVars.pop()
const noBashTitle = envVars.filter(line => !line.title.indexOf("bash") )

module.exports = envVars, noBashTitle
