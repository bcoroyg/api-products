import { ExtractJwt, Strategy } from 'passport-jwt';
import boom from '@hapi/boom';
import config from '../../../config/index.js';
import MongoLib from '../../../lib/mongo.js';

const JwtStrategy = new Strategy(
  {
    secretOrKey: config.authJwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  },
  async (tokenPayload, cb) => {
    const mongoDB = new MongoLib();
    try {
      const [user] = await mongoDB.getAll("users", {
        username: tokenPayload.sub
      });
      if (!user) {
        return cb(boom.unauthorized(), false);
      }
      return cb(null, user);
    } catch (error) {
      return cb(error);
    }
  }
);

export default JwtStrategy
