const fs = require('fs')

const data = fs.readFileSync('cpudetail.txt', 'utf8')
const lines = data.split(/\r?\n/)
// console.log(lines.length)
const cpu = []
lines.map((line, i) => {
  const separator = line.indexOf(':')

  //   console.log(i, separator)
  cpu[i] = {
    
    title: line
    .slice(0, separator)
    .toString()
    .toLowerCase()
    .split('_').join (' '),
    vars: line.slice(separator + 1, line.length)
    
  }
  // cpu = [...cpu, ]
})

// console.log('lines:', typeof lines)
// lines.map(line => {
//   // console.log(line)
//   console.log(line.split(':').join('\n\t'))
// })
// lines.map(line => console.log(line))
console.log()
// cpu.pop()
// cpu.pop()
// cpu.pop()
// cpu.pop()
// cpu.pop()
// cpu.pop()
// const noBashTitle = cpu.filter(line => !line.title.indexOf("bash") )

module.exports = cpu
