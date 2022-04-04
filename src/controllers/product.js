import Product from "../models/product";

export const list = async (req, res) => {
    const perPageNumber = 20;
    const perPage = req.query.perPage ? req.query.perPage : perPageNumber;
    const sortBy = req.query.sortBy ? req.query.sortBy : '';
    const page = req.query.page ? parseInt(req.query.page)  : 1;
    const price = req.query.price ? req.query.price : 0;
    const search = req.query.search ? req.query.search : 0;
    //sort(sort) tăng dần && -sort giảm dần , }
    const skip = (page -1) * perPage;
    console.log(typeof(price));
    try {
        const product = await Promise.allSettled([
            Product.find( search ? {$text : { $search: search}} : null, price ? { 'price' : {$gt: price }}: "").skip(skip).limit(perPage).sort(sortBy).exec(),
            Product.countDocuments().exec()
        ])
        res.json(product);
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