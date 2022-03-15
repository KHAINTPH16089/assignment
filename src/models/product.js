import mongoose, { Schema } from "mongoose";

const product = new Schema({
    name: {
        type: String,
        minlength: 5,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
})

export default mongoose.model("Product", product);