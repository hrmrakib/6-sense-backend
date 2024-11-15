import express from "express";
import {
  createNewUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/users", getAllUsers);

router.post("/create", createNewUser);

router.put("/update/:email", updateUser);

router.delete("/delete/:email", deleteUser);

export default router;
