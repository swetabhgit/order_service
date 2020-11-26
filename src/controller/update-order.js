const mongoose = require('mongoose')
const db = require('../connection/db')
const {updateOrder} = require('../buisness_logic/update-order')
const {logger} = require('../../utils/winston')
module.exports = async function(req, res, next) {
  let result
  try{
      if(req.body.customerId && req.body.oldItem, req.body.newItem)
     {
      result = await updateOrder(req.body.customerId, req.body.oldItem, req.body.newItem)
      res.status(result.status).json({message:result.message}) 
    }
        else
      throw new Error("parameter are not properly defined")
 
    }
  catch(err)
  {
    logger.log({level:'error',message:err});
    next(err)
  }
 
  }
 