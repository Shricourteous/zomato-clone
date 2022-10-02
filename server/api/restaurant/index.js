import express from "express";

import {RestaurantModel} from "../../database/allModels"
const Router = express.Router();


/**
 * <========================= Things SHould get Done =====================>
 * Route : /
 * DEsc : create new restaurants
 * params : none
 * method POST
 * access PUBLIC (For Now)
 * 
 */


/**
 * Route : /
 * DEsc : Get all restaurants based on city
 * params : none
 * query : http://localhost:4000/restaurants/?city=cbe
 * method GET
 * access PUBLIC
 */

Router.get("/", async (req, res)=>{
    try {
        const {city} = req.query;
        const restaurants = await RestaurantModel.find({city});
        if (restaurants.length === 0){
            return res.json({error: "No Restaurant Found"});

        }
        return res.json({restaurants});
    } catch (error) {
        return res.status(500).json({
            error : error.message
        });
    }
});

/**
 * Route : /:_id
 * DEsc : Get restaurant based on id
 * params : _id
 * method GET
 * access PUBLIC
 */

 Router.get("/:id", async (req, res)=>{
    try {
        const {_id} = req.params;
        const restaurant = await RestaurantModel.find({_id});
        if (restaurant.length === 0){
            return res.json({error: "No Restaurant Found"});

        }
        return res.json({restaurant});
    } catch (error) {
        return res.status(500).json({
            error : error.message
        });
    }
});


/**
 * Route : /search/:searchString
 * DEsc : Get all restaurants based on name 
 * params : :searchString
 * method GET
 * access PUBLIC
 */

 Router.get("/search/:searchString", async (req, res)=>{
    try {
        const {searchString} = req.params;
        const restaurants = await RestaurantModel.find({
            name: {$regex : searchString , $options: "i"}
        });
        if (!restaurants){
            return res.status(404).json({error: `No Restaurant Found with this ${restaurants}`});
        }
        return res.json({restaurants});
    } catch (error) {
        return res.status(500).json({
            error : error.message
        });
    }
});

export default Router;

