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

const login = async (req, res) => {
  res.send(`existing user has logged in`);
  console.log(`existing user has logged in`);
};

module.exports = { getAllAccounts, register, login };
