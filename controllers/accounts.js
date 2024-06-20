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

// app.get(`/`, (req, res) => {
//     res.send(`Am trimis info de la server catre utilizator. IN SFARSIT !`);
//   });

const getAllAccounts = async (req, res) => {
  res.json(accounts);
};

module.exports = { getAllAccounts, accounts };

//   app.get(`/accounts`, (req, res) => {
//     res.json(accounts);
//   });

///////////////////////////////////////////////////

//   app.get(`/accounts/id/:id`, (req, res) => {
//     const accountId = Number(req.params.id);
//     const getAccountByID = accounts.filter((acc) => acc.id === accountId);

//     if (!getAccountByID) {
//       res
//         .status(StatusCodes.NOT_FOUND)
//         .send(`Account ID not found. Please try again`);
//     } else {
//       res.json(getAccountByID);
//     }
//   });

///////////////////////////////////////////

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
