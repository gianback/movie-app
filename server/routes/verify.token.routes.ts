import { Request, Response, Router } from "express";
import { verifyToken } from "../services/jwt";

const router = Router();

router.post("/verify-token", async (req: Request, res: Response) => {
  const { token } = req.body;
  const { status, mssg } = verifyToken(token);
  res.json({ status, mssg });
});

export default router;
