const StatusCodes = require(`http-status-codes`);

let accounts = [
  {
    id: 1,
    username: "paulhal",
    role: "admin",
  },
  {
    id: 2,
    username: "johndoe",
    role: "guest",
  },
  {
    id: 3,
    username: "sarahjane",
    role: "guest",
  },
];

const getHomepage = async (req, res) => {
  res.json(accounts);
};

const getAllAccounts = async (req, res) => {
  res.json(accounts);
  console.log(accounts);
};

const getAccountId = async (req, res) => {
  const accountId = Number(req.params.id);
  const getAccountId = accounts.filter((acc) => acc.id === accountId);

  if (!accountId) {
    res.status(StatusCodes.NOT_FOUND).send(`Cannot find account Id`);
  } else {
    res.json(getAccountId);
  }
};

const getAccountName = async (req, res) => {
  const accountName = String(req.params.name);
  const getAccountName = accounts.filter((acc) => acc.username === accountName);

  if (!accountName) {
    res.status(StatusCodes.NOT_FOUND).send(`Cannot find account username`);
  } else {
    res.json(getAccountName);
  }
};

const getAccountRole = async (req, res) => {
  const accountRole = String(req.params.role);
  const getAccountRole = accounts.filter((acc) => acc.role === accountRole);

  if (!accountRole) {
    console.log(`not found`);
    res.status(StatusCodes.NOT_FOUND).send(`Cannot find account role `);
  } else {
    console.log(`found`);
    res.json(getAccountRole);
  }
};

const post = async (req, res) => {
  const newAccount = req.body;
  accounts.push(newAccount);
  res.json(newAccount);
  console.log(newAccount);
};

const put = async (req, res) => {
  const name = req.params.name;
  const body = req.body;
  const account = accounts.find((acc) => acc.username === name);

  if (!account) {
    res.status(StatusCodes.NOT_FOUND).send(`account not found by usernamme`);
  } else {
    const updateAccount = { ...account, ...body };
    const index = accounts.indexOf(account);
    accounts[index] = updateAccount;

    res.json(updateAccount);
  }
};

module.exports = {
  getAllAccounts,
  getHomepage,
  getAccountId,
  getAccountName,
  getAccountRole,
  post,
  put,
};
