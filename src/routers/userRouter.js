import { Router } from "express";
import {
  createUser,
  deleteUserByUsername,
  getUserByUsername,
  getUsers,
  updateUserByUsername,
  loginUser,
} from "../controllers/userController.js";

const router = Router();

router.get("/", getUsers);
router.get("/:username", getUserByUsername);
router.post("/login", loginUser);
router.post("/register", createUser);
router.put("/:username", updateUserByUsername);
router.delete("/:username", deleteUserByUsername);

export default router;
