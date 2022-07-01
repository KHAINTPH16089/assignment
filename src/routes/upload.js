import { Router } from "express";
import { remove, upload } from "../controllers/upload";

const router = Router();

router.post("/upload", upload);
router.get("/upload/:id", remove);

export default router;