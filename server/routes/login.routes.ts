import { Router } from "express";
import { check } from "express-validator";
import { registerController } from "../controllers/login.controller";

const router = Router();

router.post(
  "/login",
  [
    check("email", "El email es obligatorio").not().isEmpty().isEmail(),
    check("password", "El password es obligatorio").not().isEmpty(),
  ],
  registerController
);

export default router;
