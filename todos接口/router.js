const express = require('express')
const router = express.Router()
const ctrl = require('./controller')

//设立不同路由接口
router
  .get('/search', (req, res) => {
    ctrl.search(req, res)
  })
  .post('/add', (req, res) => {
    ctrl.add(req, res)
  })
  .post('/edit', (req, res) => {
    ctrl.edit(req, res)
  })
  .post('/del', (req, res) => {
    ctrl.del(req, res)
  })

module.exports = router
