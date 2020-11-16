const mongoose = require('mongoose')
const db = require('../connection/db')
const {getOrderWithTotal} = require('../buisness_logic/total')
const {logger} = require('../../utils/winston')
module.exports = async function(req, res, next) {
  db.connect()
  let querystring = req.query
  let result
  try{
  result = getOrderWithTotal(querystring.customerId)
  }
  catch(err)
  {
    logger.log({level:'error',message:err});
    next(err)
  }
  res.json(result)
  }
 



