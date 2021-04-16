// ext modules
const express = require('express')
const pug = require('pug')
const mongoose = require('mongoose')

// inside mods
const noBashTitle = require('./linuxData')
const cpu = require('./linuxCPU')
const distro = require('./linuxDistro')
const app = express()

const PORT = 3000
// fs.readFile('linux_env', 'utf8', (err, data) => {
//   console.log(data)
//   // return data
// })

mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const Cat = mongoose.model('Cat', { name: String, age: Number })

const kittens = {}

kittens.zild = new Cat({ name: 'Zildjian', age: '3' })
kittens.stunt = new Cat({ name: 'Stunt', age: '5' })

kittens.zild.save().then(() => console.log('meow'))
kittens.stunt.save().then(() => console.log('meow too'))

app
  .set('view engine', 'pug')
  .use(express.static('public'))
  .get('/', (req, res) => res.render('index'))
  // .get('/alt/', (req, res) => res.render('alt'))
  .get('/linux/', (req, res) => {
    res.render('linux', { toSend: noBashTitle })
  })
  .get('/cpu/', (req, res) => res.render('linux-cpu', {toSend: cpu}))
  .get('/distro/', (req, res) => res.render('distro', {toSend: distro}))
  .get('/cats/', (req, res) => res.render('cats', { kittens }))
  .listen(PORT, () => console.log('server listening on port', PORT))
