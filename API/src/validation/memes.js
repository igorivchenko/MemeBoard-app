import Joi from 'joi';

export const updateMemeSchema = Joi.object({
  title: Joi.string().min(3).max(100),
  img: Joi.string()
    .uri()
    .pattern(/\.jpg$/i)
    .message('Image must be a valid JPG URL'),
  likes: Joi.number().integer().min(0).max(99),
});
