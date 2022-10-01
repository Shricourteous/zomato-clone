import express from "express";
import dotenv from 'dotenv';
import Auth from "./api/auth"
// Database connection
import ConnectDB from './database/connection'

dotenv.config();

const zomato = express();

zomato.use(express.json());

zomato.get("/",(req, res)=>{
    res.json({
        "message" : "Server is running"
    });
});

// /auth/signup
zomato.use("/auth", Auth)

const PORT = 4000;

zomato.listen(PORT,()=>{
    ConnectDB()
    .then(()=>{
        console.log("Sever started running");
    })
    .catch((err)=>{
        console.log("error")
    })

});