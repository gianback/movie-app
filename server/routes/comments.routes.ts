import { Router } from "express";
import { getComments, createComment } from "../controllers/comments.controller";

const router = Router();

router.get("/comments", getComments);
router.post("/comments", createComment);

export default router;
