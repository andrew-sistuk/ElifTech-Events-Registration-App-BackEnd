import Joi from 'joi';
import { WHERE_MEMBER_HEAR } from '../constants/events.js';

export const memberSchemaAdd = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Field {#label} should be a string',
    'string.min': 'Field {#label} should have at least {#limit} characters',
    'string.max': 'Field {#label} should have at most {#limit} characters',
    'any.required': 'Field {#label} is required',
  }),
  email: Joi.string()
    .min(3)
    .max(20)
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .messages({
      'string.base': 'Field {#label} should be a string',
      'string.email': 'Field {#label} should be like this "*@*.*"',
      'string.min': 'Field {#label} should have at least {#limit} characters',
      'string.max': 'Field {#label} should have at most {#limit} characters',
      'any.required': 'Field {#label} is required',
    }),
  comment: Joi.string().messages({
    'boolean.base': 'Field {#label} should be a bool',
  }),
  birthDate: Joi.date().required().messages({
    'string.base': 'Field {#label} should be a string',
    'any.required': 'Field {#label} is required',}),
  info: Joi.string()
    .min(3)
    .max(20)
    .valid(...WHERE_MEMBER_HEAR)
    .required()
    .messages({
      'string.base': 'Field {#label} should be a string',
      'string.min': 'Field {#label} should have at least {#limit} characters',
      'string.max': 'Field {#label} should have at most {#limit} characters',
      'any.only': `Field {#label} should be one from this list [${WHERE_MEMBER_HEAR}]`,
      'any.required': 'Field {#label} is required'
    }),
});
