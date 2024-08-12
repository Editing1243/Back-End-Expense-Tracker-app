// 1) Accounts :

const StatusCodes = require(`http-status-codes`);
const Account = require(`../models/accountModel`);

const getAllAccounts = async (req, res) => {
  res.send(`Get all the registered users accounts`);
  console.log(`Get all the registered users accounts`);
};

const register = async (req, res) => {
  const account = await Account.create({ ...req.body });

  const token = account.createToken();

  return res.status(StatusCodes.CREATED).json({
    account: { user: account.user, email: account.email },
    token,
  });
  console.log(account);
  console.log(`new user has been registered`);
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send(`please provide email and password`);
    }

    const account = await Account.findOne({ email });

    if (!account) {
      return res.status(StatusCodes.UNAUTHORIZED).send(`Invalid credentials`);
    }

    const passwordTest = await account.comparePasswords(password);

    if (!passwordTest) {
      res.status(StatusCodes.UNAUTHORIZED).send(`Invalid credentials`);
    }

    const token = account.createToken();
    return res
      .status(StatusCodes.OK)
      .json({ account: { user: account.user }, token });
  } catch (error) {
    console.error("Error during login:", error);

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "An error occurred. Please try again later." });
  }
};

const deleteAccount = async (req, res) => {
  res.send(`user account has been deleted`);
  console.log(`user account has been deleted`);
};

const deleteAllAccounts = async (req, res) => {
  try {
    await Account.deleteMany({});
    res.status(StatusCodes.OK).send(`all users accounts have been deleted`);
    console.log(`all users accounts have been deleted`);
  } catch (error) {
    console.error("Error deleting user accounts:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Internal server error`);
  }
};

module.exports = {
  getAllAccounts,
  register,
  login,

  deleteAccount,
  deleteAllAccounts,
};
