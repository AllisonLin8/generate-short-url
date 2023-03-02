const Url = require('./models/Url')
const generateShortUrl = require('./generateShortUrl')
function checkShortUrl(newData) {
    return Url.findOne({ shortUrl: newData[0].shortUrl })
        .then(result => {
            if (result) {
                // 短網址已存在，重新生成並檢查
                return checkShortUrl(generateShortUrl(newData[0].originUrl, newData[1])) // Modify recursive condition
            } else {
                // 短網址是唯一的，返回新資料(originUrl+shortUrl)
                return newData[0]
            }
        })
}
module.exports = checkShortUrl