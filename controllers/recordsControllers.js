const StatusCodes = require(`http-status-codes`);
const Record = require(`../models/recordModel`);

const postRecord = async (req, res) => {
  return res.json(req.account);
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

const deleteRecordbyDate = async (req, res) => {
  res.send(`Delete a single record by date`);
  console.log(`Delete a single record by date`);
};

const deleteAllRecords = async (req, res) => {
  try {
    await Record.deleteMany({});
    res.status(StatusCodes.OK).send(`All records deleted`);
    console.log(`All records deleted`);
  } catch (err) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send(`${err} - could not delete records`);
  }
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
  deleteRecordbyDate,
};
