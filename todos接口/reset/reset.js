const mysql = require('mysql')
const fs = require('fs')
const path = require('path')
const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'demo',
})

//清空数据库中的数据
let sql = 'truncate info'
conn.query(sql, (err) => {
  if (err) return console.log(err)
  console.log('清空成功!')
})

//读取预先定义好的json文件并存入数据库 (前提是需要在数据库先创建一个空表)
fs.readFile(path.join(__dirname, './data.json'), 'utf8', (err, data) => {
  if (err) return console.log(err.message)
  let dataObj = JSON.parse(data)
  let sql = 'insert into info set ?'
  dataObj.forEach((item) => {
    conn.query(sql, item, (err, result) => {
      console.log('添加成功')
    })
  })
})
