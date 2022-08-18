import Joi from 'joi';

const productId = Joi.string().regex(/^[0-9a-fA-F]{24}$/);

const productTagSchema = Joi.array().items(Joi.string().max(10));

const productIdSchema = Joi.object({
  productId: productId
})

const createProductSchema = Joi.object({
  name: Joi.string()
    .max(50)
    .required(),
  price: Joi.number()
    .min(1)
    .max(1000000),
  image: Joi.string().required(),
  tags: productTagSchema
});

const updateProductSchema = Joi.object({
  name: Joi.string().max(50),
  price: Joi.number()
    .min(1)
    .max(1000000),
  image: Joi.string(),
  tags: productTagSchema
})

export {
  productIdSchema,
  createProductSchema,
  updateProductSchema
}
