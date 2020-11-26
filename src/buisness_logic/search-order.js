const menuModel = require('../model/menu').menuModel
const orderModel = require('../model/order').orderModel
const {logger} = require('../../utils/winston')

searchOrder =async (customerId)=>{
    console.log(customerId)
    if(customerId)
    {
let orders = await orderModel.findOne({customerId})
return orders? new Promise((resolve)=>(resolve(orders))):new Promise((resolve)=>(resolve(null)))
    }
return "provide correct customerId"

} 
exports.search = searchOrder