const orderModel = require('../model/order').orderModel
const {customerIdSchema} = require('../../utils/validation.schema')
deleteOrder =async (customerId)=>{
let validate = await customerIdSchema.validateAsync(customerId)
let order = orderModel.deleteOne({customerId:customerId})
return new Promise((resolve)=>resolve(order))
} 
exports.deleteOrder = deleteOrder