import mongoose, {Schema} from "mongoose";

const status = new Schema({
    name:{
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.model("status", status);