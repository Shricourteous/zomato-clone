import express from "express";
import dotenv from 'dotenv';
import session from "express-session";
// Database connection
import passport from "passport";
import ConnectDB from './database/connection'

// Private Route Authentication
import privateRouteConfig  from "./config/route.config"

import Auth from "./api/auth"
import Food from './api/food'
import Restaurant from "./api/restaurant"
import User from "./api/user"


dotenv.config();

const zomato = express();

privateRouteConfig(passport);

zomato.use(express.json());
zomato.use(session({secret : "ZomatoApp"}));
zomato.use(passport.initialize());
zomato.use(passport.session());
zomato.get("/",(req, res)=>{
    res.json({
        "message" : "Server is running"
    });
});

// /auth/signup
zomato.use("/auth", Auth);
zomato.use('/food', Food);
zomato.use('/restaurant', Restaurant);
zomato.use('/user',passport.authenticate("jwt", {session:false}), User);



const PORT = 4000;

zomato.listen(PORT,()=>{
    ConnectDB()
    .then(()=>{
        console.log("Sever started running");
    })
    .catch((err)=>{
        console.log(err, "\nDB CONN ERR")
    })

});