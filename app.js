// Require Packages

require(`dotenv`).config();
const express = require("express");
const mongoose = require(`mongoose`);
const Account = require(`./models/accountModel`);

const app = express();

// import custom modules
const recordsRoutes = require("./routes/recordsRoutes.js");
const accountRoutes = require("./routes/accountRoutes.js");
const MONGO_URI = process.env.MONGO_URI;
const authenticateAccount = require("./middleware/authentication");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// custom routes
app.use("/auth", accountRoutes);
app.use("/records", authenticateAccount, recordsRoutes);

// Connect database
mongoose
  .connect(MONGO_URI, {})
  .then(async () => {
    console.log("Connected to MongoDB");
    try {
      await Account.init(); // Ensure indexes are created
      console.log("Indexes are created");
      await Account.syncIndexes();
      console.log("Indexes are synchronized");
      console.log("JWT_SECRET:", process.env.JWT_SECRET);
    } catch (err) {
      console.error("Error creating indexes:", err);
    }
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Connect to port
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
