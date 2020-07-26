const mysql = require('mysql')
const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'demo',
})
const model = {
  getData(cb) {
    let sql = 'select * from info order by id desc'
    conn.query(sql, (err, result) => {
      if (err) return cb(err)
      cb(null, result)
    })
  },
  addData(obj, cb) {
    let sql = 'insert into info set ?'
    conn.query(sql, obj, (err) => {
      if (err) return cb(err)
      this.getData(cb)
    })
  },
  delData(id, cb) {
    let sql = 'delete from info where id = ?'
    conn.query(sql, id, (err) => {
      if (err) return cb(err)
      this.getData(cb)
    })
  },
  editData(obj, cb) {
    let { id, name, flag } = obj
    let sql = 'update info set ? where id =?'
    conn.query(
      sql,
      [
        {
          name: name,
          flag: flag,
        },
        id,
      ],
      (err) => {
        if (err) return cb(err)
        this.getData(cb)
      }
    )
  },
}

module.exports = model
