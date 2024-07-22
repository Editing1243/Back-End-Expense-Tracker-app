const express = require(`express`);

const router = express.Router();

const {
  getAllAccounts,
  register,
  login,
  logout,
  deleteAccount,
  updateAccount,
  deleteAllAccounts,
} = require(`../controllers/loginRegister`);

router.get(`/`, getAllAccounts);

router.post(`/register`, register);
router.patch(`/user/:user`, updateAccount);
router.post(`/login`, login);
router.post(`/logout`, logout);
router.delete(`/delete/:id`, deleteAccount);
router.delete(`/delete`, deleteAllAccounts);

module.exports = router;
