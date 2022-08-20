// DEBUG=app:* node src/scripts/mongo/seed-products.js

import Debug from 'debug';
import chalk from 'chalk';
import MongoLib from "../../lib/mongo.js";
import { productsMock } from '../../utils/mocks/products.js';


//debug
const debug = Debug('app:scripts:products');

const seedProducts = async () => {
  try {
    const mongoDB = new MongoLib();

    const promises = productsMock.map(async movie => {
      await mongoDB.create('products', movie);
    });

    await Promise.all(promises);
    debug(chalk.green(`${promises.length} movies have been created succesfully`)); // prettier-ignore
    return process.exit(0);
  } catch (error) {
    debug(chalk.red(error));
    process.exit(1);
  }
}

seedProducts();
