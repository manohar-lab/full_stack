const User = require("../models/User");

async function getUsers(req, res) {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch users" });
  }
}

async function createUser(req, res) {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: "Failed to create user" });
  }
}

module.exports = {
  getUsers,
  createUser
};
