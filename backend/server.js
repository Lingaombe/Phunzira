/* import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import paperRoutes from "./routes/paper.route.js";
import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongo con: ${conn.connection.host}`);
    } catch(error){
        console.error(`error: ${error.message}`);
        process.exit(1);
    }
}

dotenv.config();

const app = express();


app.use(express.json());

app.use("/papers", paperRoutes);


app.listen(5000, ()=>{
    connectDB();
    console.log("server at http://localhost:5000");
})
 */