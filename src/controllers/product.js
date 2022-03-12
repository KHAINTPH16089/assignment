
//fake api
// const data = [
//     { id: 1, name: "product A" },
//     { id: 2, name: "product B" },
//     { id: 3, name: "product C" },
//     { id: 4, name: "product D" }
// ];
import mongoose from "mongoose";

const Product = mongoose.model('Product', { name: String });

export const list = async (req, res) => {
    try {
        const products = await Product.find({}).exec()
        res.json(products);
    } catch (error) {
        res.status(400).json({
            error: "không tìm thấy sản phẩm"
        })
    }
}
export const create = async(req, res) => {
    try {
        const product = await new Product(req.body).save()
        res.json();
    } catch (error) {
        res.status(400).json({
            error: "không thêm được sản phẩm"
        })
    }
}
export const get = async (req, res) => {
    try {
        const product = await  Product.findOne({_id: req.params.id}).exec()
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được sản phẩm"
        })
    }
}
export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({_id: req.params.id}).exec()
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được sản phẩm"
        })
    }
}
export const update = async (req, res) => {
    const conditions = {_id: req.params.id,};
    const update = ({name: 'product A update'})
    try {
        const product = await Product.findOneAndUpdate(conditions, update).exec()
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được sản phẩm"
        })
    }
}