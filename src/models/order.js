import mongoose, { ObjectId } from "mongoose";

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
        default: "62b1cba8298a3e26f57d1583"
    }
}, {timestamps: true})
export default mongoose.model("Order", order);