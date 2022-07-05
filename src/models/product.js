import mongoose from "mongoose";

const { ObjectId } = mongoose.Types;

const product = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    sale_price: {
        type: Number
    },
    image: {
        type: String,
        required: true
    },
    public_id: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    status: {
        type: Number,
        default: 1
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