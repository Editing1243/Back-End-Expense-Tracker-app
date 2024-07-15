const jwt = require(`jsonwebtoken`);
const StatusCodes = require(`http-status-codes`);
const Account = require(`../models/accountModel`);

const getAllAccounts = async (req, res) => {
  res.send(`Get all the registered users accounts`);
  console.log(`Get all the registered users accounts`);
};

const register = async (req, res) => {
  res.send(`new user has been registered`);
  console.log(`new user has been registered`);
};

const updateAccount = (req, res) => {
  res.send(`User account has been updated`);
  console.log(`User account has been updated`);
};

const login = async (req, res) => {
  res.send(`existing user has logged in`);
  console.log(`existing user has logged in`);
};

const logout = async (req, res) => {
  res.send(`you have logout from your account`);
  console.log(`you have logout from your account`);
};

const deleteAccount = async (req, res) => {
  res.send(`user account has been deleted`);
  console.log(`user account has been deleted`);
};

module.exports = {
  getAllAccounts,
  register,
  login,
  logout,
  deleteAccount,
  updateAccount,
};
