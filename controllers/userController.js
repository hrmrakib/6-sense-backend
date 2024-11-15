import { userCollection } from "../config/db.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await userCollection.find().toArray();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createNewUser = async (req, res) => {
  try {
    const { firstname, lastname, email, phone } = req.body;
    const newUser = { firstname, lastname, email, phone };

    const emailExist = await userCollection.findOne({ email });
    if (emailExist) {
      return res.send({ message: "Email already exist" });
    }

    const phoneExist = await userCollection.findOne({ phone });
    if (phoneExist) {
      return res.send({ message: "Phone number already exist" });
    }

    const result = await userCollection.insertOne(newUser);

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { email } = req.params;
  const { firstname, lastname, phone } = req.body;

  const updateUserInfo = {
    $set: {
      firstname,
      lastname,
      phone,
    },
  };
  try {
    const updatedUser = await userCollection.updateOne(
      {
        email,
      },
      updateUserInfo
    );
    res.send(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { email } = req.params;
    const result = await userCollection.deleteOne({ email });
    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
