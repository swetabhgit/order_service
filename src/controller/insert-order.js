const mongoose = require('mongoose')
const db = require('../connection/db')
const {insert} = require('../buisness_logic/insert-order')
const {logger} = require('../../utils/winston')
module.exports = async function(req, res, next) {
  db.connect()
  try{
  result = insert(req.body)
  }
  catch(err)
  {
    logger.log({level:'error',message:err});
    next(err)
  }
  res.json(result)
 //db.disconnect()
  }
 