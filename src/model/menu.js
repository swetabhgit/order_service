const mongoose = require('mongoose')
const {Schema} = mongoose

const menuSchema = new Schema({
    customerId:String,items:[String]
})

exports.menuModel = mongoose.model('Menu', menuSchema)