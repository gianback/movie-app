import { Router } from "express";
import { check } from "express-validator";
import {
  loginController,
  registerController,
} from "../controllers/login.controller";

const router = Router();

router.post(
  "/auth/register",
  [
    check("email", "El email es obligatorio").not().isEmpty().isEmail(),
    check("password", "El password es obligatorio").not().isEmpty(),
  ],
  registerController
);
router.post("/auth/login", loginController);

export default router;
