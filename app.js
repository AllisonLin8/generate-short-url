// 載入套件
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
// 載入自定義文件
const Url = require('./models/Url')
const routes = require('./routes')
// 設定參數
const app = express()
const PORT = 3000
// 設定樣板引擎
app.engine('hbs', exphbs.engine({ default: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
// 設定資料庫
require('./config/mongoose')
// 設定body-parser
app.use(bodyParser.urlencoded({ extended: true }))
// 設定路由
app.use(routes)
// 啟動伺服器
app.listen(PORT, () => {
    console.log(`Generate-Short-URL server is running on http://localhost:${PORT}`)
})