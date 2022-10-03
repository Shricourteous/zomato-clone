import express from "express"
import { UserModel } from "../../database/allModels";
import passport from "passport";
const Router = express.Router();

/**
 * Absolute Route : /user/
 * Route : /
 * DEsc : Get Authorised User Data
 * params : none
 * query : http://localhost:4000/restaurants/?city=cbe
 * method GET
 * access Private
 */

 Router.get("/", passport.authenticate("jwt", {session:false}), async (req, res) => {
    try {
      const { email, fullname, phoneNumber, address } = req.user;
  
      return res.json({ user: { email, fullname, phoneNumber, address } });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  

/**
 * Absolute Route : /user/:_id
 * Route : /:_id
 * DEsc : Get  User Data
 * params : _id 
 * method GET
 * access public
 * 
 */
Router.get("/:_id", async(req, res)=>{
  try {
    const {_id} = req.params;
    const getUser = await UserModel.findById(_id);
    if (!getUser){
      return res.status(404).json({error : "No User Found"});
    }
    const {fullname} = getUser;
    return res.json({user: {fullname}});
  } catch (error) {
    return res.status(500).json({error :  error.message})
  }
});


/**
 * Absolute Route : /user/update/:_id
 * DEsc : Update  User Data
 * params : _id 
 * method PUT
 * access Private
 * 
 */

Router.put("/update/:_id",passport.authenticate("jwt", {session:false}), async (req, res)=>{
  try {
    const {_id} = req.params;
    const {userData} =  req.body;

    const updateUserData = await UserModel.findByIdAndUpdate(_id,{ $set: userData},{ new : true});
    return res.json({updatedData : updateUserData})
    
  } catch (error) {
    return res.status(500).json({error : error.message})
  }
});


export default Router;