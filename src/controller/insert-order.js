const mongoose = require('mongoose')
const {insert} = require('../buisness_logic/insert-order')
const {logger} = require('../../utils/winston')
module.exports = async function(req, res, next) {
  
  try{
  result = await insert(req.body)
  res.status(result.status).json({"message":result.message})
  }
  catch(err)
  {
    logger.log({level:'error',message:err});
    next(err)
  }

 //db.disconnect()
  }
 