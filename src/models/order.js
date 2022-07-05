import mongoose from "mongoose";

const { ObjectId } = mongoose.Types;
const order = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    phone:{
        type: Number,
        require: true
    },
    address:{
        type: String,
        require: true
    },
    node:{
        type: String
    },
    total:{
        type: Number,
        require: true
    },
    status:{
        type: ObjectId,
        default: "62c3f0c8e6d7b881ee334826"
    }
}, {timestamps: true})
export default mongoose.model("Order", order);