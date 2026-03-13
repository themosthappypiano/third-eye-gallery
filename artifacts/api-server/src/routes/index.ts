import { Router, type IRouter } from "express";
import healthRouter from "./health";
import artistsRouter from "./artists";

const router: IRouter = Router();

router.use(healthRouter);
router.use(artistsRouter);

export default router;
