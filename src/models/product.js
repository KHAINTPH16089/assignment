import mongoose, { Scheam } from "mongoose";

const product = new Scheam({
    name: {
        type: String,
        minlength: 5,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
})

export default mongoose.model("Product", product);