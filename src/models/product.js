import mongoose, { Schema } from "mongoose";

const { ObjectId } = mongoose.Types;

const product = new Schema({
    name: {
        type: String,
        minlength: 5,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    category: {
        type: ObjectId,
        required: true
    }
},{ timestamps: true })

export default mongoose.model("Product", product);