import userModel from "../models/User.js";
import userService from "../services/userService.js";

export const createUser = async (req, res) => {
  try {
    const { username, password, firstName, lastName, email } = req.body;
    const user = new userModel({
      username,
      password,
      email,
      firstName,
      lastName,
    });
    await userService.createUser(user);
    res.json(user);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

// login user
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userService.loginUser(username, password);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
}

export const getUsers = async (req, res) => {
  try {
    res.json(await userService.getAllUsers());
  } catch (error) {
    console.log(error);
  }
};

export const getUserByUsername = async (req, res) => {
  try {
    res.json(await userService.getUserByUsername(req.params.username));
  } catch (error) {
    console.log(error);
  }
};

export const updateUserByUsername = async (req, res) => {
  try {
    const updatedUser = await userService.updateUserByUsername(
      req.params.username,
      req.body
    );
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserByUsername = async (req, res) => {
  try {
    res.json(await userService.deleteUserByUsername(req.params.username));
  } catch (error) {
    console.log(error);
  }
};
