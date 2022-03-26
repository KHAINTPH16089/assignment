import { Router } from "express";
import { signup, signin, getAll } from "../controllers/user";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/user", getAll);

export default router;