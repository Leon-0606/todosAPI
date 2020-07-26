const model = require('./model')
const ctrl = {
  search(req, res) {
    model.getData((err, data) => {
      if (err) return console.log(err)
      res.send({
        code: 200,
        msg: '请求成功',
        data: data,
      })
    })
  },
  add(req, res) {
    let obj = Object.keys(req.body)
    let post = JSON.parse(obj[0])
    if (post.name.trim() === '') {
      return
    }
    post.flag = 0
    model.addData(post, (err, data) => {
      if (err) return console.log(err)
      res.send({
        code: 200,
        msg: '添加成功',
        data: data,
      })
    })
  },
  del(req, res) {
    let obj = Object.keys(req.body)
    let post = JSON.parse(obj[0])
    let id = post.id
    model.delData(id, (err, data) => {
      if (err) return console.log(err)
      res.send({
        code: 200,
        msg: '删除成功',
        data: data,
      })
    })
  },
  edit(req, res) {
    let obj = Object.keys(req.body)
    let post = JSON.parse(obj[0])
    model.editData(post, (err, data) => {
      if (err) return console.log(err)
      res.send({
        code: 200,
        msg: '修改成功',
        data: data,
      })
    })
  },
}

module.exports = ctrl
