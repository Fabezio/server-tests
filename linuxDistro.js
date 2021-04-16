const fs = require('fs')

const data = fs.readFileSync('linux-distro', 'utf8')
const lines = data.split(/\r?\n/)
const distro = [
    ["noyau", lines[0]],
    ["OS", lines[1]],
    ["hôte", lines[2]],
    ["architecture", lines[4]],
    ["plateforme", lines[7]],
]
console.log (distro)
module.exports = distro
