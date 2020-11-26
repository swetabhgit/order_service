const mongoose = require('mongoose')
const db = require('../connection/db')
const {deleteOrder} = require('../buisness_logic/delete-order')
const {logger} = require('../../utils/winston')
module.exports = async function(req, res, next) {
  try{
  result =  await deleteOrder(req.query.customerId)
  if(result.deletedCount != 0)
  res.status(200).json({message:'order deleted of customer '+ req.query.customerId})
  else
  res.status(404).json({message:'customer not found'})
  }
  catch(err)
  {
    logger.log({level:'error',message:err});
    next(err)
  }

  }