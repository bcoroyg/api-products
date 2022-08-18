import passport from 'passport';

import BasicStrategy from './strategies/basic.js';
import JwtStrategy from './strategies/jwt.js';

passport.use(BasicStrategy);
passport.use(JwtStrategy);
