import { Router } from "express";
import { create,get, remove, update, list, count} from "../controllers/product";
import { isAdmin, isAuth, requiredSignin } from "../middlewares/checkAuth";
import { userById } from "../middlewares/user";

const router = Router();

router.get('/products',  list);
router.get('/products/count',  count);
router.post('/products',  create);
router.get('/products/:id',  get);
router.delete('/products/:id',  remove);
router.put('/products/:id',  update);


router.param('userId', userById);

export default router;