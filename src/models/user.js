import mongoose, {Schema} from "mongoose";
import { createHmac } from "crypto";
import { v4 as uuidv4 } from "uuid";

const user = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    role: {
        type: Number,
        default: 0
    },
    status: {
        type: Number,
        default: 1
    }
},{timestamps: true})

user.methods = {
    authenticate(password){
        
        return this.password === this.encrytPassword(password)
    },
    encrytPassword(password){
        if(!password) return
        try {
            return createHmac("sha256", this.salt).update(password).digest("hex");
        } catch (error) {
            console.log(error);
        }
    }
}

user.pre("save", function(next){
    this.salt = uuidv4();
    this.password = this.encrytPassword(this.password);
    next();
})

export default mongoose.model("user", user);