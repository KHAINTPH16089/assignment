//const express = require("express");
//const cors = require('cors');
import express from "express";
import cors from "cors";
import product from "./routes/products";
import morgan from "morgan";
import mongoose from "mongoose";


const app = express();
//middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

//route
app.use('/api', product);

app.get('/', (req, res) => {
    res.send("<h1>Home Page</h1>");
})
app.get('/user', (req, res) => {
    res.send("<h1>Home Page</h1>");
})

//mongoose db
mongoose.connect("mongodb://localhost:27017/we16310")
    .then(()=>{ console.log("kết nối db thành công"); })
    .catch( error => {console.log(error);} )
//connet
const POST = 3001;
app.listen(POST, () => {
    console.log("server của bạn đang chạy cổng", POST);
})