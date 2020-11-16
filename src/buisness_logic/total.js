const {getMenu} = require('./search-menu')
const {search} = require('./search-order')

getOrderWithTotal = async (customerId)=>{
 let order = await search(customerId)
 let menus = await getMenu()
 let result={}
 let total =0
 order.items.forEach((item)=>{
 menus.forEach((menu)=>{
  if(item==menu['_id'])
   total = total+menu.price   
 })
 })
 result = {...order,total}
 return result
}
exports.getOrderWithTotal = getOrderWithTotal