const StatusCodes = require(`http-status-codes`);
const Record = require(`../models/recordModel`);

const getAllRecords = async (req, res) => {
  res.send(`Get all the records`);
  console.log(`Get all the records`);
};

const getRecord = async (req, res) => {
  res.send(`Get single record`);
  console.log(`Get single record`);
};

const postRecord = async (req, res) => {
  res.send(`Create a new record`);
  console.log(`Create a new record`);
};

const updateRecord = async (req, res) => {
  res.send(`Update a record`);
  console.log(`Update a record`);
};

const deleteRecord = async (req, res) => {
  res.send(`Delete a single record`);
  console.log(`Delete a single record`);
};

module.exports = {
  getAllRecords,
  getRecord,
  postRecord,
  updateRecord,
  deleteRecord,
};
