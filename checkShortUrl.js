const Url = require('./models/Url')
const generateShortUrl = require('./generateShortUrl')
function checkShortUrl(newData) {
    return Url.findOne({ shortUrl: newData.shortUrl })
        .then(result => {
            if (result) {
                // 短網址已存在，重新生成並檢查
                return checkShortUrl(generateShortUrl(newData.originUrl, 5)) // Modify recursive condition
            } else {
                // 短網址是唯一的，返回新資料(originUrl+shortUrl)
                return newData
            }
        })
}
module.exports = checkShortUrl