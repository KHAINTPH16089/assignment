import { Router } from "express";
import { create, getAll, get, remove, update } from "../controllers/category";
import { checkAuth } from "../middlewares/checkAuth";

const router = Router();

router.post("/category", checkAuth, create);
router.get("/categorys", checkAuth, getAll);
router.get("/category/:id", get);
router.delete("/category/:id", remove);
router.put("/category/:id", update);

export default router;