import mongoose, { Schema } from "mongoose";

const { ObjectId } = mongoose.Types;

const product = new Schema({
    name: {
        type: String,
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
product.index({name: "text"})

const Product = mongoose.model("Product", product);

Product.createIndexes({name: "text"})
export default Product;