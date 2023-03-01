function sample(lotteryBox) {
    const randomIndex = Math.floor(Math.random() * lotteryBox.length)
    return lotteryBox[randomIndex]
}

function generateShortUrl(originUrl, length) {
    const data = { originUrl: originUrl, shortUrl: 'localhost:3000/yourShortUrl/' }
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = lowerCaseLetters.toUpperCase()
    const number = '0123456789'
    const lotteryBox = lowerCaseLetters + upperCaseLetters + number
    let urlBox = ''
    for (let i = 1; i <= length; i++) {
        urlBox += sample(lotteryBox)
    }
    data.shortUrl += urlBox
    return data
}

module.exports = generateShortUrl