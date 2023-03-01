const Url = require('./models/Url')
const generateShortUrl = require('./generateShortUrl')
function checkShortUrl(newData) {
    return Url.findOne({ shortUrl: newData.shortUrl })
        .then(result => {
            if (result) {
                // 短網址已存在，重新生成
                return checkShortUrl(newData)
            } else {
                // 短網址是唯一的，返回短網址
                return newData
            }
        })
}
module.exports = checkShortUrl