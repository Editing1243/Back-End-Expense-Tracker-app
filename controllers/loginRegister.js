const jwt = require(`jsonwebtoken`);
const StatusCodes = require(`http-status-codes`);
const Account = require(`../models/accountModel`);

const getAllAccounts = async (req, res) => {
  res.send(`Get all the registered users accounts`);
  console.log(`Get all the registered users accounts`);
};

const register = async (req, res) => {
  const { user, email, password } = req.body;
  if (!user || !email || !password) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .send(`please provide user, email and password`);
  }

  const account = await Account.create({ ...req.body });
  res.status(StatusCodes.CREATED).json(account);
  console.log(account);
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

const deleteAllAccounts = async (req, res) => {
  res.send(`all users accounts have been deleted`);
  console.log(`all users accounts have been deleted`);
};

module.exports = {
  getAllAccounts,
  register,
  login,
  logout,
  deleteAccount,
  deleteAllAccounts,
  updateAccount,
};
