import mongoose from "mongoose";

const status = mongoose.Schema({
    name:{
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.model("status", status);