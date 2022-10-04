import express from "express";
import passport from "passport";
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();


/**
 * Absolute Route : /:resId
 * DEsc : get all revies from a particular restaurant
 * params : resId 
 * method Get
 * access public
 * 
 */

Router.get('/:resId', async(req, res)=>{
    try {
        const {resId} = req.params;
        const reviews = ReviewModel.find({restaurant:resId}).sort({createdAt : -1});
        return res.json({reviews});
    } catch (error) {
        return res.status(200).json({
            error : error.message
        })
    }
});


/**
 * Absolute Route : /new
 * DEsc : get all revies from a particular restaurant
 * params : none
 * method POST
 * access private
 * 
 */
Router.post('/new', passport.authenticate("jwt", {session: false}), async (req, res)=>{
    try {
         const {_id} = req.user;
         const reviewData = req.body;
         const review= await ReviewModel.create({...reviewData, user: _id});
         return res.json({review})

    } catch (error) {
        return res.status(500).json({error : error.message})
    }
})

export default Router;