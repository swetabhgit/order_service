const orderModel = require('../model/order').orderModel
const {logger} = require('../../utils/winston')

deleteOrder =async (customerId)=>{
let order = await orderModel.deleteOne({customerId:customerId})
return order
} 
exports.deleteOrder = deleteOrder