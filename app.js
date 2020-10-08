const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const userCheck = require('./login_check')
const bodyParser = require('body-parser')
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))

// 設定首頁路由
app.get('/', (req, res) => {
  res.render('index')
})

// 設定首頁Post
app.post('/', (req, res) => {
  const userInfo = userCheck(req.body)

  if (userInfo.firstName !== undefined) {
    res.render('welcome', { userInfo: userInfo })
  } else {
    res.render('index')
  }
})

// 設定 port 3000
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
