import express from "express";
import dotenv from 'dotenv';
import session from "express-session";
// Database connection
import passport from "passport";
import ConnectDB from './database/connection'

// Private Route Authentication
import privateRouteConfig  from "./config/route.config"
import googleAuthConfig from './config/google.config'

// Importing APIs
import Auth from "./api/auth"
import Food from './api/food'
import Restaurant from "./api/restaurant"
import User from "./api/user"
import Menu from "./api/menu"
import Order from './api/order'
import Review from './api/reviews'
import Image from './api/image'

// Middleware to operate Redux
import cors from 'cors'
import helmet from 'helmet'

dotenv.config();

const zomato = express();

privateRouteConfig(passport);
googleAuthConfig(passport);


zomato.use(cors({origin : "http://localhost:3000"}))
zomato.use(helmet())

zomato.use(express.json());
zomato.use(session({secret : process.env.JWT_SECRET}));
zomato.use(passport.initialize());
zomato.use(passport.session());

zomato.get("/",(req, res)=>{
    res.json({
        "message" : "Server is running"
    });
});

// Establishing Routes
zomato.use("/auth", Auth);
zomato.use('/food', Food);
zomato.use('/restaurant', Restaurant);
zomato.use('/user', User);
zomato.use('/menu', Menu);
zomato.use('/order',Order);
zomato.use('/review', Review);
zomato.use('/image', Image);


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