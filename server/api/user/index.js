import express from "express"
// import {UserModel} from "../../database/allModels"

const Router = express.Router();

/**
 * Route : /
 * DEsc : Get Authorised User Data
 * params : none
 * query : http://localhost:4000/restaurants/?city=cbe
 * method GET
 * access PrivAte
 */

 Router.get("/", async (req, res) => {
    try {
      const { email, fullname, phoneNumber, address } = req.user;
  
      return res.json({ user: { email, fullname, phoneNumber, address } });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  export default Router;