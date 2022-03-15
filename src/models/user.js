import mongoose, {Schema} from "mongoose";

const user = new Schema({
    userName: {
        type: String,
        minlength: 5,
        required: true
    },
    email: {
        type: String,
        minlength: 10,
        required: true
    }
})

export default mongoose.model("user", user);