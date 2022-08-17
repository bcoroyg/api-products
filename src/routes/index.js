import { Router } from "express";

const routerAPI = (app) => {
  const router = Router();
  app.use('/api/v1', router);
  router.use('/', (req, res) => {
    res.send("Welcome")
  })
}

export default routerAPI;
