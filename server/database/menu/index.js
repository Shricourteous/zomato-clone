import mongoose from "mongoose";
 
const ImageSchema = new mongoose.Schema({
    menus :[
        {
            name : {type : String, required: true},
            item : [
                {
                    type: mongoose.Types.ObjectId,
                    ref : "foods"
                }
            ]
        }
    ],
    recommended : [
        {
            type : mongoose.Types.ObjectId,
            ref : "foods",
            unique : true
        }
    ]
},
    {
        timestamps:true
    }

)

export const ImageModel = mongoose.model("images",ImageSchema);
