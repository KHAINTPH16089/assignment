import { Router } from "express";
import { signup, signin, getAll, get, remove, update} from "../controllers/user";
import { isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth";
import { userById } from "../middlewares/user";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/user/:userId",  get);
router.get("/user",  getAll);
router.delete("/user/:userId", remove);
router.put("/user/:userId", update);

router.param('userId', userById);

export default router;