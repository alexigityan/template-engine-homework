const express = require('express')
const api = express.Router()

const readTemplate = require('./util/readTemplate')
const layout = require('./templates/layout')
const header = require('./templates/header')
const aside = require('./templates/aside')
const main = require('./templates/main')

api.get('/test', (req,res)=>{
  res.send('test success')
})

api.get('/layout/:lang', (req, res) => {
  const { lang } = req.params
  const response = readTemplate(layout, lang)
  res.send(response)
})

api.get('/header/:lang', (req, res) => {
  const { lang } = req.params
  const response = readTemplate(header, lang)
  res.send(response)
})

api.get('/aside/:lang', (req, res) => {
  const { lang } = req.params
  const response = readTemplate(aside, lang)
  res.send(response)
})

api.get('/main/:lang/:postIndex', (req, res) => {
  const { lang, postIndex } = req.params
  const response = readTemplate(main, lang, postIndex)
  res.send(response)
})





module.exports = api