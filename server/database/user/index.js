import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    address: [{
        detail:
        {type : String,
        required : true},
        for : {type: String}
    }],
    phoneNumber: [{type: Number}]     

    },{
        timestamps: true
    }

)

// attachments
UserSchema.methods.genrateJwtToken = function (){};
// helperFunction
UserSchema.statics.findEmailAndPhoneno = async ()=>{};

UserSchema.statics.findEmailAndPassword = async ()=>{};

export const UserModel = mongoose.model("users", UserSchema);