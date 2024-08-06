// patch one by id-

// Get all-
// get one by id-
// Get by Type : Expense/Income-
// Get by Cathegory-

// - Dinamic JWT sa nu mai dau copy paste la fiecare in postman - opt

// - Optional 1 : Get by date (interval zi/luna/an)-
// - Delete by id-
// - Optional 1 : Delete by date (interval zi/luna/an)

// status codes, job model, request

const StatusCodes = require(`http-status-codes`);
const Record = require(`../models/recordModel`);

const postRecord = async (req, res) => {
  req.body.createdBy = req.account.accountId;
  const record = await Record.create(req.body);
  res.status(StatusCodes.CREATED).json({ ...record });
};

const updateRecord = async (req, res) => {
  res.send(`Update a record`);
  console.log(`Update a record`);
};

const getAllRecords = async (req, res) => {
  const records = await Record.find({ createdBy: req.account.accountId }).sort(
    `createdAt`
  );
  res.status(StatusCodes.OK).json({ records });
};

const getRecordId = async (req, res) => {
  const {
    account: { accountId },
    params: { id: recordId },
  } = req;

  const record = await Record.findOne({ _id: recordId, createdBy: accountId });

  if (!record) {
    res.status(StatusCodes.NOT_FOUND).send(`invalid record Id ${recordId}`);
  }
  res.status(StatusCodes.OK).json(record);
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
