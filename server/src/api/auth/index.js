import express from "express";
import passport from "passport";
import { UserModel } from "../../database/user";
import { ValidateSignin, ValidateSignup } from "../../Validation/auth.validation";

const Router = express.Router();


/**
 * Absolute Route : /signup
 * DEsc : Create a new account
 * params : None
 * method Post
 * access public
 * 
 */

Router.post("/signup", async (req, res)=>{
    try{
        await ValidateSignup(req.body.credentials);
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

/**
 * Absolute Route : /signin
 * DEsc : Login to existing account
 * params : None
 * method Post
 * access public
 * 
 */
Router.post("/signin", async (req, res)=>{

    try{
        await ValidateSignin(req.body.credentials);
        const user = await UserModel.findEmailAndPassword(req.body.credentials);
        const token =  user.genrateJwtToken();
        return res.status(200).json({token, status : "Success"})
    } catch(error){
        return res.status(500).json({error:error.message})
    }
})

Router.get('/google', passport.authenticate('google', { 
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"
    ]
}))

Router.get('/google/callback', 
    passport.authenticate('google', {failureRedirect : '/'}),
    (req, res)=>{
        // return res.status(200).json({token: req.session.passport.user.token});
        return res.redirect(`http://localhost:3000/google/${req.session.passport.user.token}`);
    }
    );

export default Router;