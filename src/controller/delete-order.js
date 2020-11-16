const mongoose = require('mongoose')
const db = require('../connection/db')
const {deleteOrder} = require('../buisness_logic/delete-order')
const {logger} = require('../../utils/winston')
module.exports = async function(req, res, next) {
  db.connect()
  try{
  result = deleteOrder(req.query.customerId)
  }
  catch(err)
  {
    logger.log({level:'error',message:err});
    next(err)
  }
  res.json(result)
  }