const express = require(`express`);

const router = express.Router();

const {
  getAllAccounts,
  register,
  login,
} = require(`../controllers/loginRegister`);

router.get(`/`, getAllAccounts);

router.post(`/register`, register);
router.post(`/login`, login);

module.exports = router;
