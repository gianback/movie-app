import { Request, Response, Router } from "express";
import { verifyToken } from "../services/jwt";

const router = Router();

router.post("/verify-token", (req: Request, res: Response) => {
  try {
    const { token } = req.body;
    const tokenValidated = verifyToken(token);
    if (tokenValidated) {
      return res.status(200).json({
        status: "200",
        msg: "Valid token",
      });
    }
  } catch (error) {
    return res.status(406).json({
      status: "406",
      msg: "Expired token",
    });
  } finally {
    return;
  }
});

export default router;
