import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import { readdirSync } from "fs";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import fileUpload from "express-fileupload";

import product from "./routes/products";

const app = express();
const swaggerJSDocs = YAML.load("./api.yaml")
//middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDocs));
app.use(fileUpload())
//route
readdirSync(__dirname + "/routes").forEach((fileName) => {
    import("./routes/" + fileName)
        .then(({ default: router }) => router.default)
        .then((router) => {
            app.use("/api", router);
        });
});

//mongoose db
mongoose.connect("mongodb://localhost:27017/we16310")
    .then(()=>{ console.log("kết nối db thành công"); })
    .catch( error => {console.log(error);})
//connet
const POST = 3001;
app.listen(POST, () => {
    console.log("server của bạn đang chạy cổng", POST);
})