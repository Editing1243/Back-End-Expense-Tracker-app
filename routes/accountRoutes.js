const express = require(`express`);

const router = express.Router();

const {
  getAllAccounts,
  register,
  login,
  logout,
  deleteAccount,
  updateAccount,
} = require(`../controllers/loginRegister`);

router.get(`/`, getAllAccounts);

router.post(`/register`, register);
router.patch(`/user/:user`, updateAccount);
router.post(`/login`, login);
router.post(`/logout`, logout);
router.delete(`/delete`, deleteAccount);

module.exports = router;
