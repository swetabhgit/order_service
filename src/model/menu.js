const mongoose = require('mongoose')
const {Schema} = mongoose
const {menuDb} = require('../connection/db')

const menuSchema = new Schema({
    _id:String, name:String,price:Number,restaurantId:String
})

exports.menuModel = menuDb.model('Menu', menuSchema)