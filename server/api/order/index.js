import express from "express";
import passport from "passport";
import {OrderModel} from "../../database/allModels"

const Router = express.Router()

/**
 * Absolute Route : /:_id (JWT Handles with additional params)
 * DEsc : get all Orders by  ID
 * params : _id 
 * method Get
 * access private
 * 
 */
Router.get('/', passport.authenticate("jwt", {session:false}),async (req, res)=>{
    try {
        const {user} = req;
        const getOrder =  await OrderModel.findOne({user : user._id});
        if(!getOrder) return res.status(404).json({
            error: "Failed TO fetch Order Details"
        })
        return res.status(200).json({orders: getOrder});
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
})



export default Router;