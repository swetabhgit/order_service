//const restaurant = require('../model/restaurant').restaurantModel
const menuModel = require('../model/menu').menuModel
const orderModel = require('../model/order').orderModel
const distance = require('../../utils/distance')
const {logger} = require('../../utils/winston')

insertOrder =async (body)=>{
let order = new orderModel({'customerId':body.customerId,'items':body.items})
let result = await order.save()
} 
exports.insert = insertOrder