import express from "express";
import { MenuModel, ImageModel } from "../../database/allModels";

const Router = express.Router();
/**
 * Absolute Route : /list
 * DEsc : get List of menu by restaurant ID
 * params : _id 
 * method Get
 * access public
 */
// Router.get("/list/:_id", async (req,res)=>{
//     try {
//         const {_id} = req.params;
//         const menus = await MenuModel.findById(_id);
//         if (!menus) return res.status(404).json({error  : "No menus found"});
//         return res.status(200).json({menus});
//     } catch (error) {
//         return res.status(404).json({error : error.message})
//     }
// })

Router.get("/list/:_id", async (req, res) => {
    try {
      const { _id } = req.params;
      const menus = await MenuModel.findById(_id);
  
      if (!menus) {
        return res
          .status(404)
          .json({ error: "No menu present for this restaurant" });
      }
  
      return res.json({ menus });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });

/**
 * Absolute Route : /image
 * DEsc : get all List of menu by  ID
 * params : _id 
 * method Get
 * access public
 * 
 */
Router.get("/image/:_id", async(req,res)=>{
    try {
        const {_id} = req.params;
        const menuImages = await ImageModel.findOne({_id});
        if(!menuImages){
            return res.status(404).json("No Menu Images found by this ID");
        }
        return res.status(200).json({menuImages});
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
})
 

export default Router;