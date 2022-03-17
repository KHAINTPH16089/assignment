import mongoose, {Schema} from "mongoose";

const category = new Schema({
    name:{
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.model("category", category);