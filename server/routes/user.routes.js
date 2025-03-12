import express from "express";
import {
  list,
  read,
  create,
  update,
  remove,
  deleteAllUsers,
  signin,
  userByID
} from "../controllers/user.controller.js";

const router = express.Router();

// Existing routes
router.get("/users", list);
router.get("/users/:id", read);
router.post("/users", create);
router.put("/users/:id", update);
router.delete("/users/:id", remove);
router.delete("/users", deleteAllUsers);

// Sign-in route
router.post("/users/signin", signin);

// Parameter middleware
router.param("id", userByID);

export default router;
