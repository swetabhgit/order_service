const orderModel = require('../model/order').orderModel
const {logger} = require('../../utils/winston')

updateOrder =async (customerId, OldItemId, newItemId)=>{
    console.log(customerId)
    if(customerId)
    {
    let orders = await orderModel.findOne({customerId})
    if(orders)
    {
    let positionOfOrder = orders.items.indexOf(OldItemId)
    orders.items[positionOfOrder] = newItemId
    await orderModel.findOneAndUpdate({customerId},{"items":[...orders.items]})
    return new Promise((resolve)=>resolve({status:200, message:"updated successfully"}))
    }
    else
    return new Promise((resolve,reject)=>reject({status:404, message:"customer not found"}))  
}
else
{
   throw new Error("please provide customer id in querysting")
}

} 
exports.updateOrder = updateOrder