const Joi = require('joi');

module.exports = Joi.object({
  sellerId: Joi.number().required(),
  totalPrice: Joi.number().required(),
  deliveryAddress: Joi.string().max(100).empty().required(),
  deliveryNumber: Joi.string().max(50).empty().required(),
  status: Joi.string().max(50).empty().required(),
}).messages({
   'any.required': 'Invalid entries. {#label} is required.',
   'any.empty': 'Invalid entries. {#label} cannot be empty.',
   'string.base': 'Invalid entries. {#label} must be a string',
   'string.max': 'Invalid entries. {#label} extrapolated the number of characters',
   'number.base': 'Invalid entries. {#label} must be a number',
});