import express from "express";
import router from "./router/products";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use(cors())

app.use('/api',router);

mongoose.connect("mongodb://localhost:27017/hello").then(function(){
    console.log("connect data success");
});

export const viteNodeApp = app;
