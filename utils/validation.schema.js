const Joi = require('joi');

const orderSchema = Joi.object({
    customerId: Joi.string().required(),
    items: Joi.array().required()
})
const customerIdSchema = Joi.string().required()
module.exports = {orderSchema, customerIdSchema}