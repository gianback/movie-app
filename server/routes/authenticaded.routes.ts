import { Router } from "express";
import { getUserDataForShow } from "../controllers/authenticaded.controller";
import { checkJwt } from "../middlewares/session";

const router = Router();

router.get("/", checkJwt, getUserDataForShow);

export default router;
