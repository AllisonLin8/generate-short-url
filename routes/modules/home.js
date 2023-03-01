const express = require('express')
const router = express.Router()
const Url = require('../../models/Url')
const generateShortUrl = require('../../generateShortUrl')
const checkShortUrl = require('../../checkShortUrl')

// 瀏覽短網址生成器的首頁
router.get('/', (req, res) => {
    res.render('index')
})
// 提交要縮短的網址
router.post('/', async (req, res) => {
    try {
        const result = await Url.findOne({ originUrl: req.body.originUrl })
        if (result) {
            return res.render('generate', { shortUrl: result.shortUrl })
        } else {
            const newData = await checkShortUrl(generateShortUrl(req.body.originUrl, 5))
            Url.create(newData)
            return res.render('generate', { shortUrl: newData.shortUrl })
        }
    } catch (error) {
        console.log(error)
        res.render('errorPage', { error: error.message })
    }
}
)
// 瀏覽短網址的頁面
router.get('/generate', (req, res) => {
    res.render('generate')
})
// 透過短網址來瀏覽原網址的頁面
router.get('/yourShortUrl/:shortUrl', (req, res) => {
    const shortUrl = req.headers.host + req.url
    Url.findOne({ shortUrl: shortUrl })
        .then(result => {
            return res.redirect(result.originUrl)
        })
        .catch(error => {
            console.log(error)
            res.render('errorPage', { error: error.message })
        })
})

module.exports = router