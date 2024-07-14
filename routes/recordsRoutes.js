const express = require(`express`);

const router = express.Router();

const {
  getAllRecords,
  getRecord,
  postRecord,
  updateRecord,
  deleteRecord,
} = require(`../controllers/recordsControllers`);

//  DE REFERINTA MOMENTAN , TREBUIE SCHIMBATE FUNCTIILE IN CONTROLLERS
//  ACESTEA VOR FI FEATURES ASA CUM MI-A ZIS TOMAS

router.get(`/`, getAllRecords);
router.get(`/`, getRecord);
router.post(`/:id`, postRecord);
router.put(`/:id`, updateRecord); //or patch
router.delete(`/`, deleteRecord);

module.exports = router;
