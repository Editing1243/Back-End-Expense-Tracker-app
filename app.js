// Require Modules

const express = require("express");
const app = express();

const accountRoutes = require("./routes/accountsRoutes");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// custom routes
app.use("/", accountRoutes);

// Creating port and listen to the server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// 1) Routes and endpoints

// termin rutele notate in routes si ma asigur ca merg
// ma ocup si de put si delete si testez

// 2) MongoDB Atlas :

// - Cum populez proiectul express app cu date

// - Cum conectez Atlas la proiect

// - Sa imi afișeze datele din proiect în timp real/sa reflecte schimbarile din datele din proiect în Atlas in real time

// - How to Define my data Schema

// 3) Features

// - branch separat pentru feature

// - Login + register

// - Jason Web token

// - testat

// 4) ! Sa nu uit sa creez branch-uri noi pentru features diferite și sa le unesc cu cel de main dupa ce termin cu unul !

// - Vad care e treaba cu Auth
// - Vad ce feature mai pot sa implementez din ce a scris Tomas
// - Vad ce am mai omis de facut din ce a arătat ala în proiect, ce nu am adaugat

// - când consider ca am făcut tot ce am putut intreb Google/Chat GPT ce mai pot implementa la Expense tracker app

// - când nu mai am și nu mai am idei îl anunț pe Tomas ca nu mai știu ce sa fac și sa se uite pe ce am făcut pana acum
