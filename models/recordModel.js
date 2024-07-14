const mongoose = require(`mongoose`);
const recordSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    ecnum: [`expense`, `income`],
    message: `Chose Type only between expense or income`,
  },
  value: { type: Number, required: true },
  date: {
    year: { type: Number, required: true },
    month: {
      type: Number,
      required: true,
      min: [1, `Mounth must be between 1 and 12`],
      max: [12, `Mounth must be between 1 and 12`],
    },
    day: {
      type: Number,
      required: true,
      min: [1, `Day must be between 1 and 31`],
      max: [31, `Day must be between 1 and 31`],
    },
  },
  cathegory: {
    type: String,
    required: true,
  },
});

const Record = mongoose.model(`Record`, recordSchema);

module.exports = Record;
