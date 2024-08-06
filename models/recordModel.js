const mongoose = require(`mongoose`);

const recordSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, `Please provide type (expense or income)`],
      enum: [`expense`, `income`],
      message: `Chose Type only between expense or income`,
    },
    value: { type: Number, required: [true, `Please provide value`] },
    date: {
      year: { type: Number, required: [true, `Please provide year`] },
      month: {
        type: Number,
        required: [true, `Please provide month`],
        min: [1, `Mounth must be between 1 and 12`],
        max: [12, `Mounth must be between 1 and 12`],
      },
      day: {
        type: Number,
        required: [true, `Please provide day`],
        min: [1, `Day must be between 1 and 31`],
        max: [31, `Day must be between 1 and 31`],
      },
    },
    cathegory: {
      type: String,
      required: [
        true,
        `Please provide one of the following cathegories : rent,house expense,cleaning products,health,food,other leisures,monthly income,external help`,
      ],
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
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: `Account`,
      required: [true, `Please login to existing account`],
    },
  },
  { timestamps: true }
);

const Record = mongoose.model(`Record`, recordSchema);

module.exports = Record;
