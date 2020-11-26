const mongoose = require('mongoose')
const menuModel = require('./menu').menuModel
const {Schema} = mongoose
const {orderDb} = require('../connection/db')

const orderSchema = new Schema({
    customerId:String,items:[{type:String,ref:menuModel}]
})

exports.orderModel = orderDb.model('Order', orderSchema)