import category from "../models/category";

export const create = async (req, res) =>{
    try {
        const categorys = await new category(req.body).save();
        res.json(categorys);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được danh mục"
        })
    }
}

export const getAll = async (req, res) =>{
    try {
        const categorys = await category.find({}).exec();
        res.json(categorys);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được danh mục"
        })
    }
}
export const get = async (req, res) =>{
    try {
        const categorys = await category.findOne({_id: req.params.id}).exec();
        res.json(categorys);
    } catch (error) {
        res.status(400).json({
            error: "không tìm được danh mục"
        })
    }
}

export const remove = async (req, res) =>{
    try {
        const categorys = await category.findOneAndDelete({_id: req.params.id}).exec();
        res.json(categorys);
    } catch (error) {
        res.status(400).json({
            error: "không tìm được danh mục"
        })
    }
}

export const update = async (req, res) =>{
    const conditions = {_id: req.params.id};
    const update = {name: "category A update"}

    try {
        const categorys = await category.findOneAndUpdate(conditions, update).exec();
        res.json(categorys);
    } catch (error) {
        res.status(400).json({
            error: "không tìm được danh mục"
        })
    }
}