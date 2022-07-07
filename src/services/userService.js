import userModel from "../models/User.js";

const createUser = async (user) => {
  return await user.save();
};

const getAllUsers = async () => {
  return await userModel.find();
};

const loginUser = async (username, password) => {
  const user = userModel.findOne({ username, password });
  if(user) {
    return user;
  }
  return null;
}

const getUserByUsername = async (username) => {
  return await userModel.findOne({ username: username });
};

const updateUserByUsername = async (username, propertiesToUpdate) => {
  const userToUpdate = await userModel.findOneAndUpdate(
    { username: username },
    { $set: propertiesToUpdate },
    { returnNewDocument: true, upsert: true }
  );
  // userModel.save();
  return userToUpdate;
};

const deleteUserByUsername = async (username) => {
  return await userModel.findOneAndDelete({ username: username });
};

export default {
  createUser,
  getAllUsers,
  getUserByUsername,
  updateUserByUsername,
  deleteUserByUsername,
  loginUser,
};
