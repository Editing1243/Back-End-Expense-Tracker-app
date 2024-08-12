const express = require(`express`);

const router = express.Router();

const {
  getAllAccounts,
  register,
  login,
  deleteAccount,
  deleteAllAccounts,
} = require(`../controllers/loginRegister`);

router.get(`/`, getAllAccounts);

router.post(`/register`, register);

router.post(`/login`, login);

router.delete(`/delete/:id`, deleteAccount);
router.delete(`/delete`, deleteAllAccounts);

module.exports = router;
