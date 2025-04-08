import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


async function connectDB(){
    try {
        const connectionInstance = await mongoose.connect(
          `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host}`);
        //> Console.log (connectionInstance) TASK TO BE DONE 
    } catch (error) {
        console.error("MongoDB connection Failed" , error);
        process.exit(1)
        //? this is a node specific stuff and exit had differnt code like network sts 404 , 502 etc. 
    }
}

export default connectDB;