// Require Modules
const StatusCodes = require(`http-status-codes`);
const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// accounts placeholder to test and understand http methods
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

// id array egalizat cu id de params

// Setting up routes/defining http Methods
app.get(`/`, (req, res) => {
  res.send(`Am trimis info de la server catre tine. IN SFARSIT !`);
});

app.get(`/accounts`, (req, res) => {
  res.json(accounts);
});

app.get(`/accounts/:id`, (req, res) => {
  const accountId = Number(req.params.id);
  const getAccountByID = accounts.find((acc) => acc.id === accountId);

  if (!accountId) {
    res
      .status(StatusCodes.NOT_FOUND)
      .send(`Account not found. Please try again`);
  } else {
    res.json(getAccountByID);
  }
});

// Creating port and listen to the server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// define http methods + mutat metodele in modul separat pentru routes
// connection to database + CRUD operations + data schema + insert data in the first place
//
// impart structura pe module
// ma apuc de implementat features
// vb Tomas sa zica daca e ok si cum mai abordez in continuare la etapa de features
