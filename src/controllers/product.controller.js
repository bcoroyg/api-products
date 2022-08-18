import { Router } from "express";
import ProductService from "../services/product.service.js";

const productService = ProductService;

const router = Router();

router.get('/', async (req, res, next) => {
  const { tags } = req.query;
  try {
    const products = await productService.getProducts({ tags })

    res.status(200).json({
      data: products,
      message: 'products listed'
    })
  } catch (error) {
    next(error)
  }
});

router.get('/:productId', async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await productService.getProduct({ productId });

    res.status(200).json({
      data: product,
      message: 'product retrieved'
    })
  } catch (error) {
    next(error)
  }
});

router.post('/', async (req, res, next) => {
  const { body } = req;
  try {
    const createdProduct = await productService.createProduct({ product: body });
    res.status(201).json({
      data: createdProduct,
      message: 'product created'
    })
  } catch (error) {
    next(error)
  }
});

router.put('/:productId', async (req, res, next) => {
  const { productId } = req.params;
  const { body } = req;
  try {
    const updatedProduct = await productService.updateProduct({ productId, product: body })
    res.status(200).json({
      data: updatedProduct,
      message: 'product updated'
    })
  } catch (error) {
    next(error)
  }
});

router.delete('/:productId', async (req, res, next) => {
  const { productId } = req.params;
  try {
    const deletedProduct = await productService.deleteProduct({ productId })
    res.status(200).json({
      data: deletedProduct,
      message: 'product deleted'
    })
  } catch (error) {
    next(error)
  }
});

export default router;
