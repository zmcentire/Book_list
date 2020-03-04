const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
    },
    author: {
        type: String
    }
})

module.exports = mongoose.model('book', bookSchema)