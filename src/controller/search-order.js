const mongoose = require('mongoose')
const db = require('../connection/db')
const {getOrderWithTotal} = require('../buisness_logic/total')
const {logger} = require('../../utils/winston')
module.exports = async function(req, res, next) {
  let querystring = req.query
  let result
  try{
  result = await getOrderWithTotal(querystring.customerId)
  res.status(result.status).json(result.data)
  }
  catch(err)
  {
    logger.log({level:'error',message:err});
    next(err)
  }
  }
 



