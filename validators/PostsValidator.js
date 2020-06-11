const {
  celebrate,
  Joi,
  Segments,
} = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      content: Joi.string().required(),
      images: Joi.array().items(Joi.string()),
      date: Joi.string(),
      tags: Joi.array().items(Joi.string()),
    }),
  }),
};
