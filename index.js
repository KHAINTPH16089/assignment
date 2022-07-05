import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
// import { readdirSync } from "fs";
// import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import fileUpload from "express-fileupload";
import order from "./src/routes/order.js";
import product from "./src/routes/products.js";
import upload from "./src/routes/upload.js";
import category from "./src/routes/category.js";
import user from "./src/routes/user.js";

const app = express();
//middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDocs));
app.use(fileUpload())
//route
app.use('/api', product)
app.use('/api', order)
app.use('/api', upload)
app.use('/api', category)
app.use('/api', user)

//mongoose db
mongoose.connect("mongodb+srv://khaintph16089:kazuo002@cluster0.fqkqf4g.mongodb.net/angular")
    .then(()=>{ console.log("kết nối db thành công"); })
    .catch( error => {console.log(error);})
//connet

const POST = 3001;
app.listen(POST, () => {
    console.log("server của bạn đang chạy cổng", POST);
})