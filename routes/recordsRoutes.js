const express = require(`express`);

const router = express.Router();

const {
  getAllRecords,
  getRecordId,
  postRecord,
  updateRecord,
  deleteRecord,
  getRecordType,
  getRecordCat,
  getRecordDate,
  deleteAllRecords,
  deleteRecordbyDate,
} = require(`../controllers/recordsControllers`);

//  DE REFERINTA MOMENTAN , TREBUIE SCHIMBATE FUNCTIILE IN CONTROLLERS
//  ACESTEA VOR FI FEATURES ASA CUM MI-A ZIS TOMAS

router.get(`/`, getAllRecords);
router.get(`/id/:id`, getRecordId);
router.get(`/type/:type`, getRecordType);
router.get(`/cathegory/:cathegory`, getRecordCat);
router.get(`/date/:date`, getRecordDate);

router.post(`/`, postRecord);
router.patch(`/id/:id`, updateRecord);
router.delete(`/id/:id`, deleteRecord);
router.delete(`/date/:date`, deleteRecordbyDate);
router.delete(`/`, deleteAllRecords);

module.exports = router;
