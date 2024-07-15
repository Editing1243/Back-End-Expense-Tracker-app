// Require Modules

const express = require("express");
const mongoose = require(`mongoose`);

require(`dotenv`).config();
const app = express();

// import custom modules
const recordsRoutes = require("./routes/recordsRoutes.js");
const accountRoutes = require("./routes/accountRoutes.js");
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// custom routes
app.use("/records", recordsRoutes);
app.use("/auth", accountRoutes);

// Connect database
mongoose
  .connect(MONGO_URI, {})
  .then(() => console.log(`Database conection success`))
  .catch((err) => console.log(err));

// Creating port and listen to the server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//////////////////////////////////////////////////////////////////////////////////

// password - QHzGF23kZtaXLuSv -
// user - stefanolteanu1995
// connection strting -
// mongodb+srv://stefanolteanu1995:0ydGt7tvI2oEdA4r@cluster0.hzxxrdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// my updated string -
// MONGO_URI=mongodb+srv://stefanolteanu1995:0ydGt7tvI2oEdA4r@cluster0.hzxxrdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//////////////////////

// PLAN

////////////////////////

// 1) Accounts :

// - Acount login/register
// - Make sure each account has individual separate data from different accounts
// and test if individual account data persist across the database, for each individual account

// Post one (register account)
// Post one (login account)
// Get all accounts
// Get one Account
// Delete Account
// Sign Out

// !! Test if data is different for each individual account by signing in to one account, posting and deleting,
// singing into another different acount, repeating posting and deleting
// then siginig in to the first account and veryfing the state of its data
// then siginig in to the second account and veryfing the state of its data
// !!! they must be different from each other and reflect the changes as you remember before signing out of each one

// 2) Records :

// Post/Create record
// Get all
// get one
// patch
// Get by Cathegory
// Get by Type : Expense/Income
// Delete one
// Delete all

// - Optional 1 : Get by date (interval zi/luna/an)

// - Opțional 2: Situație profit/loss

// !! Îl intreb pe Tomas daca fac asta ca http method in backend sau o lasam xa funcție de front-end

// sum expenses values
// sum incomes values
// Incomes sum - expenses sum
// - sa calculeze asta dinamic in functie de toate records pe utilizator.
// Daca șterg sau adaug record cu different value pe utilizator sa imi calculeze asta dinamic la orice record
