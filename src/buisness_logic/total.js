const {getMenu} = require('./search-menu')
const {search} = require('./search-order')
const {getCache} = require("../../utils/get-menu-cache")
const db = require('../connection/db')

getOrderWithTotal = async (customerId)=>{
 
 let order = await search(customerId)
 if(order)
 {    
 let menus = JSON.parse(await getCache())
 let result={}
 let total =0
 let foods=[]
 order.items.forEach((item)=>{
 menus.forEach((menu)=>{
  if(item==menu['_id'])
  {
    foods.push(menu.name)
   total = total+menu.price  
  } 
 })
 })
 result ={foods, 'total':total}
 return new Promise((resolve) => resolve({status:200, data:result}))
}
new Promise((resolve) => resolve({status:200, data:{message:"order not present"}}))
}
exports.getOrderWithTotal = getOrderWithTotal