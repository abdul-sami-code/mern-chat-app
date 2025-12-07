import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./src/lib/db.js";
import authRoute from "./src/routes/auth.route.js"
import messageRoute from "./src/routes/message.route.js"
import cors from 'cors'
import path from "path"
import { app,server } from "./src/lib/socket.js";
dotenv.config();

const __dirname = path.resolve();
connectDB()
app.use(express.json());
app.use(cookieParser());
app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb', extended: true }));
app.use(cors({
    origin:"http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:true,
    allowedHeaders: ["Content-Type", "Authorization"]
}))
app.use("/api/auth",authRoute);
app.use("/api/messages",messageRoute);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"./frontend/dist")))
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"./frontend","dist","index.html"))
    })
}

server.listen(3000,()=>{
    console.log("server is active");
  
})
