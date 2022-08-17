import express from 'express';
import config from './config/index.js';
import routerAPI from './routes/index.js';

const app = express();

//Middlewares
app.use(express.json());

//router
routerAPI(app);

app.listen(config.port, () => {
  console.log(`Server started on port`);
});

