import { Router } from "express";
import passport from 'passport';
import boom from '@hapi/boom';
import jwt from 'jsonwebtoken'
import config from "../config/index.js";

const router = Router();

router.post("/token", async (req, res, next) => {
  passport.authenticate("basic", (error, user) => {
    try {
      if (error || !user) {
        return next(boom.unauthorized());
      }

      req.login(user, { session: false }, async (error) => {
        if (error) {
          return next(error);
        }

        const payload = { sub: user.username, email: user.email };
        const token = jwt.sign(payload, config.authJwtSecret, {
          expiresIn: "15m"
        });

        return res.status(200).json({ access_token: token });
      });
    } catch (error) {
      next(error);
    }
  })(req, res, next);
});

export default router;
