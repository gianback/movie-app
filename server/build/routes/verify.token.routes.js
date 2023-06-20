"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const session_1 = require("../middlewares/session");
const verify_token_controller_1 = require("../controllers/verify.token.controller");
const router = (0, express_1.Router)();
router.post("/verify-token", session_1.checkJwt, verify_token_controller_1.verifyTokenController);
exports.default = router;
