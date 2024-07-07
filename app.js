// Require Modules

const express = require("express");
const mongoose = require(`mongoose`);

require(`dotenv`).config();
const app = express();

const accountRoutes = require("./routes/accountsRoutes");
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// custom routes
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

// OBIECTIVE :
// 4) ! Sa nu uit sa creez branch-uri noi pentru features diferite și sa le unesc cu cel de main dupa ce termin cu unul !

// - Vad care e treaba cu Auth
// - Vad ce feature mai pot sa implementez din ce a scris Tomas
// - Vad ce am mai omis de facut din ce a arătat ala în proiect, ce nu am adaugat

// - când consider ca am făcut tot ce am putut intreb Google/Chat GPT ce mai pot implementa la Expense tracker app

// - când nu mai am și nu mai am idei îl anunț pe Tomas ca nu mai știu ce sa fac și sa se uite pe ce am făcut pana acum

// INTREBARI :
// --- În a nodejs express app there are CRUD operations.
// --- We have a schema with the model "Item". What is item.save, item.UpdateOne ? How do you call these

// ---Show me all and every methods that are used to interact with the MongoDB database,
// particularly for performing CRUD (Create, Read, Update, Delete) operations.

// --- What can I log to see all The methods. If I log The Item obiect will I see all this methods. ?
// If not, what obiect contains all these methods so I can log it and see them in the VS Code terminal ?

//////////////////////////////////////////////////////

// password - QHzGF23kZtaXLuSv -
// user - stefanolteanu1995
// connection strting -
// mongodb+srv://stefanolteanu1995:0ydGt7tvI2oEdA4r@cluster0.hzxxrdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// my updated string -
// MONGO_URI=mongodb+srv://stefanolteanu1995:0ydGt7tvI2oEdA4r@cluster0.hzxxrdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
