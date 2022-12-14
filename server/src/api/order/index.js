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

/**
 * Absolute Route : order/new/:_id 
 * DEsc : Add New Orders by  ID
 * params : none 
 * method PUT / Post (since we create new one)
 * access private
 * 
 */
Router.put("/new", passport.authenticate("jwt", {session: false}, async(req, res)=>{
    try {
        const {user}= req;
        const {orderDetails} = req.body;
        // VALIDATE ORDER DETAILS
        const addNewOrder = await OrderModel.findOneAndUpdate(
            {user : user._id}, {$push:{ordersDetails:orderDetails}}, {new: true}
            );
        return res.status(200).json({order:addNewOrder});
    } catch (error) {
        return res.status(500).json({error: error.message})

    }
}))


export default Router;