const mongoose = require(`mongoose`);
const recordSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: [`expense`, `income`],
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
    enum: [
      `rent`,
      `house expenses`,
      `cleaning products`,
      `health`,
      `food`,
      `other leisures`,
      `hobby`,
      `monthly income`,
      `external help`,
    ],
    message: `Chose Type only between the designated options`,
  },
});

const Record = mongoose.model(`Record`, recordSchema);

module.exports = Record;
