const StatusCodes = require(`http-status-codes`);
const Record = require(`../models/recordModel`);

const postRecord = async (req, res) => {
  res.send(`Create a new record`);
  console.log(`Create a new record`);
};
const getAllRecords = async (req, res) => {
  res.send(`Get all the records`);
  console.log(`Get all the records`);
};

const getRecordId = async (req, res) => {
  res.send(`Get single record by Id`);
  console.log(`Get single record by Id`);
};

const getRecordType = async (req, res) => {
  res.send(`Get record by type expense/income`);
  console.log(`Get record by type expense/income`);
};

const getRecordCat = async (req, res) => {
  res.send(`Get record by Cathegory expense or income`);
  console.log(`Get record by Cathegory expense or income`);
};

const getRecordDate = async (req, res) => {
  res.send(`Get record by date interval`);
  console.log(`Get record by date interval`);
};

const updateRecord = async (req, res) => {
  res.send(`Update a record`);
  console.log(`Update a record`);
};

const deleteRecord = async (req, res) => {
  res.send(`Delete a single record`);
  console.log(`Delete a single record`);
};

const deleteAllRecords = async (req, res) => {
  res.send(`Delete all records`);
  console.log(`Delete all records`);
};

module.exports = {
  getAllRecords,
  getRecordId,
  postRecord,
  updateRecord,
  deleteRecord,
  deleteAllRecords,
  getRecordType,
  getRecordCat,
  getRecordDate,
};
