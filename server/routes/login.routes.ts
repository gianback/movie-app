import { Router } from "express";
import {
  loginController,
  registerController,
} from "../controllers/login.controller";
import { googleController } from "../controllers/google.controller";
import { validateRegister } from "../middlewares/validateRegister";

const router = Router();

router.post("/auth/register", validateRegister, registerController);
router.post("/auth/login", loginController);
router.post("/auth/google", googleController);

export default router;
