// --Ce a ramas de facut

// Get by Type : Expense/Income
// Get by Cathegory
// Delete all - functia inregistrare sa stearga doar din contul curent
// - Optional 1 : Get by date (interval zi/luna/an) , sau dupa data fixa
// - Optional 1 : Delete by date (interval zi/luna/an), sau dupa data fixa

const StatusCodes = require(`http-status-codes`);
const Record = require(`../models/recordModel`);

const postRecord = async (req, res) => {
  req.body.createdBy = req.account.accountId;
  const record = await Record.create(req.body);
  res.status(StatusCodes.CREATED).json({ ...record });
};

const updateRecord = async (req, res) => {
  const {
    body: { type, value, date, cathegory },
    account: { accountId },
    params: { id: recordId },
  } = req;

  if (type === `` || value === `` || date === `` || cathegory === ``) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send(`Please provide valid record fields info`);
  }
  console.log(`body works`);

  const record = await Record.findByIdAndUpdate(
    {
      _id: recordId,
      createdBy: accountId,
    },
    req.body,
    { new: true, runValidators: true }
  );

  console.log(`record works`);

  if (!record) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .send(`no record with id ${recordId}`);
  }

  res.status(StatusCodes.OK).json(record);
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
  const {
    account: { accountId },
    params: { id: recordId },
  } = req;

  const record = await Record.findByIdAndDelete({
    _id: recordId,
    createdBy: accountId,
  });

  if (!record) {
    res.status(StatusCodes.NOT_FOUND).send(`please provide valid record Id`);
  }
  res
    .status(StatusCodes.OK)
    .send(`Record with id ${recordId} has been deleted`);
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
