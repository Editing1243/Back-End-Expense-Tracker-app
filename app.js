// Require Modules
const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Port/Routes
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// middleware cu json pentru request.body la http methods
// make sure the port/server/postman works and is able to send and receive data
// create http methods post/get/delete
// define routes
// connection to database + CRUD operations
// vb Tomas sa zica daca e ok si cum mai abordez in continuare
