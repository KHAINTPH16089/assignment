import { Router } from "express";
import { signup, signin } from "../controllers/user";

const router = Router();

router.post("/user", signup);
router.get("/user/:email", signin);

export default router;