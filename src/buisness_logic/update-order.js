const orderModel = require('../model/order').orderModel
const {logger} = require('../../utils/winston')

updateOrder =async (customerId, OldItemId, newItemId)=>{
    if(customerId)
    {
    let orders = await orderModel.findOne({customerId})
    let positionOfOrder = orders.items.indexOf(OldItemId)
    console.log(orders, "----> orders")
    console.log(positionOfOrder, "---> position of order")
    console.log(newItemId, "---> new Item")
    orders.items[positionOfOrder] = newItemId
    // await orders.save()
    await orderModel.findOneAndUpdate({customerId},{"items":[...orders.items]})

    }
else
{
   throw new Error("please provide customer id in querysting")
}

} 
exports.updateOrder = updateOrder