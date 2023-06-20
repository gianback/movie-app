"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRegister_1 = require("../middlewares/validateRegister");
const auth_controller_1 = require("../controllers/auth.controller");
// import { googleController } from "../controllers/google.controller";
const middlewares_1 = require("../middlewares");
const profile_controller_1 = require("../controllers/profile.controller");
const router = (0, express_1.Router)();
router.post("/auth/register", validateRegister_1.validateRegister, auth_controller_1.registerController);
//Todo middleware que valide si es un email
router.post("/auth/login", auth_controller_1.loginController);
// router.post("/auth/google", googleController);
router.get("/auth/profile", middlewares_1.checkJwt, profile_controller_1.profileController);
exports.default = router;
