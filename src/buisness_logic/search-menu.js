const menuModel = require('../model/menu').menuModel
const {logger} = require('../../utils/winston')

getMenu = async ()=>{

    try{
        let menus = await menuModel.find()
        return menus

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