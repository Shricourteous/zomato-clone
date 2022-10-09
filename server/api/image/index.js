import express from 'express';
import aws, { Route53Domains } from "aws-sdk";
import multer from "multer";
import {ImageModel} from "../../database/image"
import {s3Upload} from '../../utils/s3';


const Router = express.Router();

// Multer config
const storage = multer.memoryStorage();
const upload = multer({storage})

/**
 * Absolute Route : /:_id
 * DEsc : get images details
 * params : _id 
 * method POST
 * access public
 */

Router.post("/:_id", async(req, res)=>{
    try {
        const image =  await ImageModel.findById(req.params._id);
        return res.status(200).json({ image })
    } catch (error){
        return res.status(500).json({message : error.message})
    }
});

/**
 * Absolute Route : /image
 * DEsc : upload images to s3 bucket and save the link to mongoDB
 * params : _id 
 * method post
 * access public
 * upload.single('file') // file is the name of the key in body of api
 * uploadImage return details from aws
 */

Router.post("/", upload.single('file'), async(req, res)=>{
    try {
        const file = req.file; 
        const bucketOption = {
            Bucket : "zomato-clone-5040",
            Key : file.originalname,
            Body : file.buffer, //Heavy file store in temp while uploading
            ContentType: file.memetype,
            ACL : "public-read" 
        };
        const uploadImage = await s3Upload(bucketOption);

        const dbLoc = await ImageModel.create({
            images: [ {
                location: uploadImage.Location
            }]
        })
        return res.status(200).json({dbLoc})
        
    } catch (error) {
        return res.status(500).json({message : error.message})
    }
})

export default Router;
