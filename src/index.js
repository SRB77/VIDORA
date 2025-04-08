import dotenv from 'dotenv'
dotenv.config({path:'./env'})
import connectDB from './db/index.js'

connectDB()

















/*
import express from "express";
const app = express()

;(async function connectDB(){
    try {
//         //* this is the way to connect with DB . 
        await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`);
//         //* it confirm that our express is able to talk to DB.
        app.on("Error" ,()=>{
            console.log(`Our app is unable to talk to DB` , error)
            throw error
        })
//         //* confirming our app is listening 
        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error is here:", error);
        throw error
    }
})() 

//? This way of creating and connecting with DB on a single index file makes so much cluter to handle . But we had covered all the best practices like IIFE and async await also for error resolving we used try catch as well .
 */
