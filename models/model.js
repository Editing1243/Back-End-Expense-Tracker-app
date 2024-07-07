const mongoose = require(`mongoose`);
const accountSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
});

// const accountSchema = new mongoose.Schema({
//   id: Number,
//   name: String,
//   role: String,
// });

const Account = mongoose.model(`Account`, accountSchema);

module.exports = Account;
