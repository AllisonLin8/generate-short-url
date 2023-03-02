const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
    originUrl: {
        type: String,
        required: true,
        unique: true // add unique flag
    },
    shortUrl: {
        type: String,
        required: true,
        unique: true // add unique flag
    },
})
module.exports = mongoose.model('Url', urlSchema)