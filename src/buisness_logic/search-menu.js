const menuModel = require('../model/menu').menuModel
const db = require('../connection/db')
const {logger} = require('../../utils/winston')

getMenu = async ()=>{
    
    try{
        let menus = await menuModel.find({})
        return new Promise((resolve)=>resolve(menus))
    }
    catch(err)
    {
        logger.log({
            level:'error',
            message:err
        })
    }
}
exports.getMenu = getMenu