const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
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
  const email = req.body.email
  const password = req.body.password

  console.log('The Account:', email)
  console.log('The password:', password)

  if (email === 'a1234@gmail') {
    // console.log('verifiedAccount:', verifiedAccount);
    res.render('welcome')
  }
})

// 設定 port 3000
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})
