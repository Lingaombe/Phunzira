import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import paperRoutes from "./routes/paper.route.js";

dotenv.config();

const app = express();


app.use(express.json());

app.use("/papers", paperRoutes);


app.listen(5000, ()=>{
    connectDB();
    console.log("server at http://localhost:5000");
})
