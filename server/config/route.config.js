import JwtPassport from "passport-jwt";

import { UserModel } from "../database/allModels";

const JWTStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

// Head:{
//  Authorization: "Bearer sadfaervfr4356sdfvasdr34cvasd4"
//}

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "ZomatoApp",
};


//JWTStrategy is responsible for decodinf the token
// jwt__payload has decoded token OW error throws as Authorised
// It can be found in req.user object after the successfull logins {USED IN api/auth/user/index.js}
export default (passport) => {
  passport.use(
    new JWTStrategy(options, async (jwt__payload, done) => {
      try {
        const doesUserExist = await UserModel.findById(jwt__payload.user);
        if (!doesUserExist) return done(null, false);
        return done(null, doesUserExist);
      } catch (error) {
        throw new Error(error);
      }
    })
  );
};
