// init routes

import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  patchUser,
} from "../controllers/userControllers.js";
import { userLogin } from "../controllers/userLogin/userLogin.js";
import { userRegister } from "../controllers/userLogin/userRegister.js";

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router
  .route("/:id")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser)
  .patch(patchUser);


  // user login and registaer route
  router.route('/login').post(userLogin)
  router.route('/register').post(userRegister)

export default router;
