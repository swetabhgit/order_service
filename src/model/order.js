const mongoose = require('mongoose')
const menuModel = require('./menu').menuModel
const {Schema} = mongoose

const orderSchema = new Schema({
    customerId:String,items:[{type:String,ref:menuModel}]
})

exports.orderModel = mongoose.model('Order', orderSchema)