import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World! API Is working! 🔥");
});

export default router;
