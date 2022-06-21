const mongoose = require('mongoose');
//Push new Content ID to array within parent category category.content on create route of Content document
const ContentSchema = new mongoose.schema({
    title: String,
    content: String,
}, {timestamps: true})
const Content = mongoose.model('Content', ContentSchema)
module.exports = Content;