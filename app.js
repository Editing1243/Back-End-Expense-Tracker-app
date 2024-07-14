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
app.use("/", recordsRoutes);
app.use("/", accountRoutes);

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

// Model record : _id, type, sum cathegory, date
// Model account : user, email, password

// Post record
// Get all records
// Delete all records

// Authentication :
// Register
// Login
// Post record
// Get all records
// Sign out

// Register other user
// Login
// Post record
// Get all records
// Compare to the other user
// Sign out

// Login first user
// Post/delete/see all data
// Compare data to second user
// Sign off

// Login second user
// Post/delete/see all data
// Compare data to firsr user

// If data persists we good to go. Ma apuc de implementat ce mi-a dat Tomas !!!

/////////////////////////////////////////////////////////////////////////////////////////////

// create methods :

// - Post record
// - Get all records
// - Get record by Date (filter date interval)
// - Get record by type of expense (only income/expense : make them the only avalible values)
// - Get record by category
// - Delete record
// - Delete all records
// - Update record

// TEST THEM ALL ON DIFFERENT ACCOUNTS
// CHECK IF DATA PERSIST ACROSS DIFFERENT ACCOUNTS

// Opțional  !

// Aplicația trebuie să afiseze aceste date sub forma unei situatii P/L (profit & loss)

// - sum all values of all income type records
// - sum all values of all expense type records
// all income records values sum - all expense records values sum = balance
