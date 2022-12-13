import Users from "../models/UserModel.js";

export const getUser = async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: message.error });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.json(user);
  } catch (error) {
    const status = res.status(404).json({ message: error.message });
    console.log(status);
  }
};

export const saveUser = async (req, res) => {
  const user = new Users(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    const status = res.status(400).json({ message: error.message });
    console.log(status);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const dropUser = await Users.deleteOne({ _id: req.params.id });
    res.status(200).json(dropUser);
  } catch (error) {
    res.status(404).json({ message: message.error });
  }
};
