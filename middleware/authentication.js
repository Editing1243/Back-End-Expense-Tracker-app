const Account = require(`../models/accountModel`);
const StatusCodes = require(`http-status-codes`);
const jwt = require(`jsonwebtoken`);
const JWT_SECRET = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader.startsWith(`Bearer `)) {
    res.status(StatusCodes.UNAUTHORIZED).send(`Authentication invalid`);
  }
  const token = authHeader.split(` `)[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    // attatch user to job routes
    req.account = { accountId: payload.accountId, user: payload.user };

    next();
  } catch (error) {
    res.status(StatusCodes.UNAUTHORIZED).send(`Authentication invalid`);
  }
};

module.exports = auth;
