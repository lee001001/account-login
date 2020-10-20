const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const userCheck = require('./login_check')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

// 設定首頁路由
app.get('/', (req, res) => {
  if (req.cookies.name) {
    const firstName = req.cookies.name
    console.log('Cook設定')
    res.render('welcome', { firstName: firstName })
  } else {
    res.render('index')
  }
})

// 設定首頁Post
app.post('/', (req, res) => {
  const firstName = userCheck(req.body)

  console.log(firstName)

  if (firstName !== undefined) {
    res.cookie('name', `${firstName}`)
    res.render('welcome', { firstName: firstName })
  } else {
    console.log('密碼錯誤')
    res.render('index')
  }
})

// clear cookie
app.get('/logout', (req, res) => {
  res.clearCookie('name', { path: '/' })
  return res.redirect('/')
})

// 設定 port 3000
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
