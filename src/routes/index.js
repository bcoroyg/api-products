import { Router } from "express";
import productController from '../controllers/product.controller.js';
import authController from '../controllers/auth.controller.js';

const routerAPI = (app) => {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/auth', authController);
  router.use('/products', productController);
}

export default routerAPI;
