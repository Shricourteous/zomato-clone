import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
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
    },
    address: [{
        detail:
        {type : String},
        for : {type: String}
    }],
    phoneNumber: [{type: Number}]     

    },{
        timestamps: true
    }

)



// attachments //signing or creating of tokens
// jwt.sign(data, key) //key used to decrypt  token
UserSchema.methods.genrateJwtToken = function (){
    return jwt.sign({user: this._id.toString()}, process.env.JWT_SECRET);
};
    

// helperFunction
UserSchema.statics.findEmailAndPhoneno = async ({email, phoneNumber})=>{

    const findUserByEmail = await UserModel.findOne({email});
    const findUserByPhoneno = await UserModel.findOne({phoneNumber});

    if (findUserByEmail || findUserByPhoneno){
        throw new Error("User Already Exists");
    }
    return false; 
};

UserSchema.statics.findEmailAndPassword = async ({email, password})=>{
    const user = await UserModel.findOne({email})
    if (!user) {
        throw new Error ("User Not existed")
    
    };

    // password Comparison (string, hash-code)
    const doesPassMatch = await bcrypt.compare(password, user.password);
    if(!doesPassMatch){
        throw new Error("Invalid Credentials");
    }
    return user;

};

// do this before save
UserSchema.pre('save', function(next){
    const user = this;
    // password is modified?
    if (!user.isModified('password')) return next();
    // generate salt
    bcrypt.genSalt(8,(error, salt)=>{
        if(error) return next(error);
        // hash the password
        bcrypt.hash(user.password, salt ,(error, hash)=>{
            if (error) return next(error);

            // assigning hashed password
            user.password = hash;
            return next();
        })
    })
})


export const UserModel = mongoose.model("users", UserSchema);