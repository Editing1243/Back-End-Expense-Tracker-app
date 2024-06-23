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

module.exports = {
  getAllAccounts,
  getHomepage,
  getAccountId,
  getAccountName,
  getAccountRole,
};

// error - send bad status code + message
// success- send json response to interface

// app.get(`/accounts/user/:user`, (req, res) => {
//   const accountUser = String(req.params.user);
//   const getAccountByUser = accounts.filter(
//     (acc) => acc.username === accountUser
//   );

//   if (!getAccountByUser) {
//     res
//       .status(StatusCodes.NOT_FOUND)
//       .send(`Account user not found. Please try again`);
//   } else {
//     res.json(getAccountByUser);
//   }
// });

/////////////////////////////////////////////////////////////////////

// app.get(`/accounts/role/:role`, (req, res) => {
//   const accountRole = String(req.params.role);
//   const getAccountByRole = accounts.filter((acc) => acc.role === accountRole);

//   if (!accountRole) {
//     res
//       .status(StatusCodes.NOT_FOUND)
//       .send(`Account role not found. Please try again`);
//   } else {
//     res.json(getAccountByRole);
//   }
// });

//////////////////////////////////////////////////////////////////////////////

// app.post(`/accounts`, (req, res) => {
//   const newAccount = req.body;
//   accounts.push(newAccount);

//   res.json(newAccount);
// });
