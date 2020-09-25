const express = require('express')
const methodOverride = require('method-override')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const PORT = 3000

app.use(bodyParser.urlencoded({ extender: true }))
app.use(methodOverride('_method'))

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// 設定首頁路由
app.get('/', (req, res) => {
  res.render('index')
})

// 設定 port 3000
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})