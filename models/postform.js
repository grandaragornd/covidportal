const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postForm = new Schema({
    name: String,
    lastname: String
})

//create model
const Form = mongoose.model('Form', postForm);
module.exports = Form