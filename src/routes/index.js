var express = require('express');
var router = express.Router();
const searchOrder= require('../controller/search-order')
const insertOrder = require('../controller/insert-order') 
const deleteOrder = require('../controller/delete-order')
const updateOrder = require('../controller/update-order')
const winston = require('winston');
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

router.get('/search', searchOrder)
router.post('/insert', insertOrder)
router.delete('/delete', deleteOrder)
router.put('/update', updateOrder)

module.exports = router;
