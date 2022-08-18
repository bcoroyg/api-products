import express from 'express';
import helmet from 'helmet'
import config from './config/index.js';
import routerAPI from './routes/index.js';
import { errorHandler, logErrors, wrapErrors } from './utils/middlewares/errorsHandlers.js';
import notFoundHandler from './utils/middlewares/notFoundHandler.js';

import Debug from "debug";
const debug = Debug("app:server");
const app = express();

app.use(helmet());
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
  debug(`Server started on port`);
});

export default app;

