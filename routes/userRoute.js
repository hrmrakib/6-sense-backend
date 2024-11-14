import express from "express";
import { userCollection } from "../config/db.js";

const router = express.Router();

router.get("/users", async (req, res) => {
  try {
    const users = await userCollection.find().toArray();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/create", async (req, res) => {
  try {
    const { firstname, lastname, email, phone } = req.body;
    const newUser = { firstname, lastname, email, phone };

    console.log({ newUser });

    const result = await userCollection.insertOne(newUser);

    res.send(result);
    // if (result.acknowledged) {
    //   res.status(201).json({ message: "User created successfully" });
    // }
    //  else {
    //   res.status(500).json({ message: "Failed to create user" });
    // }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
