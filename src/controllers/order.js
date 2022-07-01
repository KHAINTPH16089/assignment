import Order from "../models/order";
import OrderDetail from "../models/orderDetail";


export const createOrder = async (req, res) =>{
    try {
        const order = await new Order(req.body).save();
        res.json(order);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được đơn hàng"
        })
    }
}

export const createOrderDetail = async (req, res) =>{
    try {
        const order = await new OrderDetail(req.body).save();
        res.json(order);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được đơn hàng"
        })
    }
}

export const getAllOrder = async (req, res) =>{
    try {
        const order = await Order.find().exec();
        res.json(order);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được đơn hàng"
        })
    }
}

export const getOrder = async (req, res) =>{
    try {
        const order = await Order.findOne({_id: req.params.id}).exec();
        const orderDetail = await OrderDetail.find({order: req.params.id}).exec();

        res.json(orderDetail);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được đơn hàng"
        })
    }
}

export const remove = async (req, res) =>{
    try {
        const order = await Order.findOneAndDelete({_id: req.params.id}).exec();
        res.json(order);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được đơn hàng"
        })
    }
}

export const update = async (req, res) => {
    const conditions = {_id: req.params.id,};
    const update = req.body;
    try {
        const product = await Order.findOneAndUpdate(conditions, update).exec();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            error: "không thêm được sản phẩm"
        })
    }
}
