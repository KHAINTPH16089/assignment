import mongoose, {Schema} from "mongoose";

const category = new Schema({
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