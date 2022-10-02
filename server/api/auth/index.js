import express from "express";

import { UserModel } from "../../database/user";

const Router = express.Router();

Router.post("/signup", async (req, res)=>{
    try{

        await UserModel.findEmailAndPhoneno(req.body.credentials);
        const newUser = await UserModel.create(req.body.credentials);
        const token = newUser.genrateJwtToken();
        return res.status(200).json({
            token,
            status:"Success",
        })        

    } catch(error) {
        return res.status(500).json({error: error.message})
    }



})
Router.post("/signin", async (req, res)=>{

    try{

        const user = await UserModel.findEmailAndPassword(req.body.credentials);
        const token =  user.genrateJwtToken();
        return res.status(200).json({token, status : "Success"})
    } catch(error){
        return res.status(500).json({error:error.message})
    }
})
export default Router;