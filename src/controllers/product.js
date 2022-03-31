import Product from "../models/product";

export const list = async (req, res) => {
    const limitNumber = 20;
    const limit = req.query.limit ? req.query.limit : limitNumber;
    const sortBy = req.query.sortBy ? req.query.sortBy : '';
    const order = req.query.order ? req.query.order : '';

    try {
        const products = await Product.find({}).sort(sortBy).exec();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            error: "không tìm thấy sản phẩm"
        })
    }
}
export const create = async(req, res) => {
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được sản phẩm"
        })
    }
}
export const get = async (req, res) => {
    try {
        const product = await  Product.findOne({_id: req.params.id}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được sản phẩm"
        })
    }
}
export const remove = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({_id: req.params.id}).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được sản phẩm"
        })
    }
}
export const update = async (req, res) => {
    const conditions = {_id: req.params.id,};
    const update = req.body;
    try {
        const product = await Product.findOneAndUpdate(conditions, update).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được sản phẩm"
        })
    }
}