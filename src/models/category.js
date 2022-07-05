import mongoose from "mongoose";

const category =  mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 1
    }
}, {timestamps: true})

export default mongoose.model("category", category);