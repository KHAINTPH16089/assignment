import { Router } from "express";
import { createOrder, createOrderDetail, getAllOrder, getOrder, remove, update } from "../controllers/order";

const router = Router();

router.post("/order", createOrder);
router.post("/orderDetail", createOrderDetail);
router.get("/order/:id", getOrder);
router.delete("/order/:id", remove);
router.get("/order", getAllOrder);
router.put("/order/:id", update);

export default router;