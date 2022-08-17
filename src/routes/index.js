import { Router } from "express";
import productController from '../controllers/product.controller.js';

const routerAPI = (app) => {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/products', productController)
}

export default routerAPI;
