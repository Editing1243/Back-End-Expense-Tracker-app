// Get by date (interval zi/luna/an) , sau dupa data fixa
// Delete by date (interval zi/luna/an), sau dupa data fixa

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
  const {
    account: { accountId },
    params: { type: recodType },
  } = req;

  const record = await Record.find({
    type: recodType,
    createdBy: accountId,
  });

  if (!record) {
    res.status(StatusCodes.NOT_FOUND).send(`invalid record Id ${recordId}`);
  }
  res.status(StatusCodes.OK).json(record);
};

const getRecordCat = async (req, res) => {
  const {
    account: { accountId },
    params: { cathegory: recordCat },
  } = req;
  console.log(`function works`);
  const record = await Record.find({
    cathegory: recordCat,
    createdBy: accountId,
  });
  console.log(`record found`);

  if (record.length === 0) {
    res.status(StatusCodes.NOT_FOUND).send(`invalid record Id ${recordId}`);
  }
  res.status(StatusCodes.OK).json(record);
};

//////////////////////////////////////////////////////////////////////

const getRecordDate = async (req, res) => {
  const {
    account: { accountId },
    params: { date: recordDateString },
  } = req;

  const [year, month, day] = recordDateString.split("-").map(Number);

  if (!year || !month || !day) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send("Please provide a valid date in the format YYYY-MM-DD");
  }

  try {
    const records = await Record.find({
      "date.year": year,
      "date.month": month,
      "date.day": day,
      createdBy: accountId,
    });

    if (records.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .send("No records found for the given date");
    }

    res.status(StatusCodes.OK).json(records);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send("Error retrieving records");
  }
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
  const {
    account: { accountId },
    params: { date: recordDateString },
  } = req;

  const [year, month, day] = recordDateString.split("-").map(Number);

  if (!year || !month || !day) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .send("Please provide a valid date in the format YYYY-MM-DD");
  }

  try {
    const records = await Record.deleteMany({
      "date.year": year,
      "date.month": month,
      "date.day": day,
      createdBy: accountId,
    });

    if (records.length === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .send("No records found for the given date");
    }

    res.status(StatusCodes.OK).json(records);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send("Error retrieving records");
  }
};

const deleteAllRecords = async (req, res) => {
  try {
    await Record.deleteMany({ createdBy: req.account.accountId });
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
