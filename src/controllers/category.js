import Category from "../models/category.js";
import Status from "../models/status.js";
import Product from "../models/product.js";

export const create = async (req, res) =>{
    try {
        const category = await new Category(req.body).save();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được danh mục"
        })
    }
}

export const getAll = async (req, res) =>{
    try {
        const category = await Category.find({}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được danh mục"
        })
    }
}
export const get = async (req, res) =>{
    const limit = req.query.limit ? req.query.limit : '';
    try {
        const category = await Category.findOne({_id: req.params.id}).exec();
        const product = await Product.find({ category }).select("-category").limit(limit).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không tìm được danh mục"
        })
    }
}
export const detail = async (req, res) =>{
    try {
        const category = await Category.findOne({_id: req.params.id}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "không tìm được danh mục"
        })
    }
}

export const remove = async (req, res) =>{
    try {
        const category = await Category.findOneAndDelete({_id: req.params.id}).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "không tìm được danh mục"
        })
    }
}

export const update = async (req, res) =>{
    const conditions = {_id: req.params.id};
    const update = req.body

    try {
        const category = await Category.findOneAndUpdate(conditions, update).exec();
        res.json(category);
    } catch (error) {
        res.status(400).json({
            error: "không tìm được danh mục"
        })
    }
}

//status
export const createStatus = async (req, res) =>{
    try {
        const status = await new Status(req.body).save();
        res.json(status);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được danh mục"
        })
    }
}

export const getAllStatus = async (req, res) =>{
    try {
        const status = await Status.find({}).exec();
        res.json(status);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được danh mục"
        })
    }
}