import { Router } from "express";
import { create,get, remove, update, list, count} from "../controllers/product.js";
import { userById } from "../middlewares/user.js";

const router = Router();

router.get('/products',  list);
router.get('/products/count',  count);
router.post('/products',  create);
router.get('/products/:id',  get);
router.delete('/products/:id',  remove);
router.put('/products/:id',  update);


router.param('userId', userById);

export default router;