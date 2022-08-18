import express from 'express';
import config from './config/index.js';
import routerAPI from './routes/index.js';
import { errorHandler, logErrors, wrapErrors } from './utils/middlewares/errorsHandlers.js';
import notFoundHandler from './utils/middlewares/notFoundHandler.js';

const app = express();

//Middlewares
app.use(express.json());

//routes
routerAPI(app);

//error handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);
//Middleware error 404
app.use(notFoundHandler);

//server
app.listen(config.port, () => {
  console.log(`Server started on port`);
});

