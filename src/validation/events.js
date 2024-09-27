import Joi from 'joi';

const createEventSchema = Joi.object({
  title: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Field {#label} should be a string',
  }),
});
export const validateEvents = createEventSchema.validate({});
