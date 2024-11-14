import express from "express";
import {
  createNewUser,
  deleteUser,
  getAllUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getAllUsers);

router.post("/create", createNewUser);

router.delete("/delete/:email", deleteUser);

export default router;
