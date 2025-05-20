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

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router
  .route("/:id")
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser)
  .patch(patchUser);

export default router;
