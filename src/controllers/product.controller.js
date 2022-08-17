import { Router } from "express";
import productsMock from "../utils/mocks/products.js";
productsMock
const router = Router();

router.get('/', (req, res) => {
  const { query } = req.query;
  console.log(query)
  res.status(200).json({
    data: productsMock,
    message: 'products listed'
  })
});

router.get('/:productId', (req, res) => {
  const { productId } = req.params;
  console.log(productId)
  res.status(200).json({
    data: productsMock[0],
    message: 'product retrieved'
  })
});

router.post('/', (req, res) => {
  res.status(201).json({
    data: productsMock[0],
    message: 'product created'
  })
});

router.put('/:productId', (req, res) => {
  const { productId } = req.params;
  console.log(productId)
  res.status(201).json({
    data: productsMock[0],
    message: 'product updated'
  })
});

router.delete('/:productId', (req, res) => {
  const { productId } = req.params;
  console.log(productId)
  res.status(201).json({
    data: productsMock[0],
    message: 'product deleted'
  })
});

export default router;
