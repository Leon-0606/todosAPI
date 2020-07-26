const express = require('express')
const router = require('./router')
const cors = require('cors')
const app = express()
app.listen(8080, () => {
  console.log('server is running')
})
// 解决跨域
app.use(cors())
//通过中间件拿到post请求体中的内容
app.use(express.urlencoded({ extended: true }))
//使用路由管理
app.use(router)
