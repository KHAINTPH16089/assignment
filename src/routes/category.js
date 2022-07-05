import { Router } from "express";
import { create, getAll, get, remove, update, detail, createStatus, getAllStatus } from "../controllers/category.js";

const router = Router();

router.post("/category", create);
router.get("/category", getAll);
router.get("/category/:id", get);
router.get("/category/detail/:id", detail);
router.delete("/category/:id", remove);
router.put("/category/:id", update);
router.post("/status", createStatus);
router.get("/status", getAllStatus);

export default router;