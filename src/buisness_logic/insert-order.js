//const restaurant = require('../model/restaurant').restaurantModel
const menuModel = require('../model/menu').menuModel
const orderModel = require('../model/order').orderModel
const distance = require('../../utils/distance')
const {logger} = require('../../utils/winston')
const {orderSchema} = require('../../utils/validation.schema')

insertOrder =async (body)=>{
let validate = await orderSchema.validateAsync(body)
let isExist = await orderModel.findOne({'customerId':body.customerId})
if(!isExist)
{
let order = new orderModel({'customerId':body.customerId,'items':body.items})
let result = await order.save()
return result && new Promise((resolve)=>{resolve({status:201,message: "new order has been created"})})
} 
return new Promise((resolve)=>(resolve({status: 403, message:"already exists"})))
}
exports.insert = insertOrder