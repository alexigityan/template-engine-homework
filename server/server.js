const express = require('express')
const app = express()
const api = require('./webApi')

const PORT = 3000


app.use(express.static(__dirname + '/../public'))
app.use('/api', api)


app.listen(PORT, ()=>console.log('server on ' + PORT))