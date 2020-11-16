const menuModel = require('../model/menu').menuModel
const orderModel = require('../model/order').orderModel
const {logger} = require('../../utils/winston')

searchOrder =async (customerId)=>{
    console.log(customerId)
    if(customerId)
    {
let orders = await orderModel.findOne({customerId})
console.log(orders)
return orders
    }
else
{
   throw new Error("please provide customer id in querysting")
}

} 
exports.search = searchOrder