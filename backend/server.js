import express from 'express';
import authRoutes from "./routes/auth.routes.js"
import dotenv from "dotenv";
import connectMongoDb from './db/connectMongoDB.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // to parse req.body to json So we can access the data easily
app.use(express.urlencoded({extended:true}));// same here

app.get("/",(req,res)=>{
    res.send("working fine");
})


app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on Port:${PORT}`);
    connectMongoDb();
})