import { BasicStrategy as Strategy } from 'passport-http';
import boom from '@hapi/boom';
import bcrypt from 'bcrypt';
import MongoLib from '../../../lib/mongo.js';

const BasicStrategy = new Strategy(
  async (username, password, cb) => {
    const mongoDB = new MongoLib();

    try {
      const [user] = await mongoDB.getAll("users", { username });

      if (!user) {
        return cb(boom.unauthorized(), false);
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return cb(boom.unauthorized(), false);
      }
      return cb(null, user);
    } catch (error) {
      return cb(error);
    }
  }
);

export default BasicStrategy;
