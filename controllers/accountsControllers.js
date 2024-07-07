const StatusCodes = require(`http-status-codes`);
const Account = require(`../models/model`);

const createAccount = async (req, res) => {
  const { id, name, role } = req.body;

  if (
    !id ||
    typeof id !== `number` ||
    !name ||
    typeof name !== `string` ||
    !role ||
    typeof role !== `string`
  ) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(`request does not match mongoose data model`);
  }

  try {
    const existingAccount = await Account.findOne({ id });
    console.log(existingAccount);
    if (existingAccount) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .send(`Id was allready taken by another user`);
    }

    const newAccount = new Account({ id, name, role });
    // console.log(newAccount);
    const savedAccount = await newAccount.save();
    // console.log(savedAccount);
    res.status(StatusCodes.CREATED).json(savedAccount);
    console.log(`Account Created`);
  } catch (err) {
    console.error(err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Internal server error`);
  }
};

module.exports = {
  createAccount,
};
