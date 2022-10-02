import express from "express";

import {FoodModel} from "../../database/allModels"

/**
 * Route : /:_id
 * DEsc : Get food based on Id
 * params : _id
 * method GET
 * access PUBLIC
 */
const Router = express.Router();

Router.get("/:id", async (req, res)=>{
    try {
        const {_id} = req.params;
        
        const foods = FoodModel.findById(_id);
        return res.status(200).json({foods}); 
    } catch (error) {
        return res.status(400).json({
            error : error.message
        });
    }
})

/**
 * <====================== WORK SHOULD BE DONE HERE  ======================>
 * Route : /:_id
 * DEsc : Create new food
 * params : none
 * method POST
 * access PUBLIC
 */

/**
 * Route : /r/:_id
 * DEsc : Get all food from particular restaurant ID
 * params : _id
 * method GET
 * access PUBLIC
 */

Router.get("/r/:_id", async (req,res)=>{
    try {
        const {_id} = req.params;
        const foods = await FoodModel.find({
            restaurant: _id
        });
        return res.status(200).json({foods});
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
});

/**
 * Route : /c/:category
 * DEsc : Get all food from particular category 
 * params : category
 * access PUBLIC
 * method GET
 */

Router.get("/c/:category", async (req, res)=>{
    try {
      const {category} = req.params; 
      const foods = FoodModel.find({
        category: {$regex : category, $options: "i"}
      })
      if(!foods){
        return res.status(404).json({error:`No foods Matched with this ${category}`});
      } 
      return res.status(200).json({foods});

    } catch (error) {
        return res.status(400).json({
            error : error.message
        });
    }
});

export default Router;

