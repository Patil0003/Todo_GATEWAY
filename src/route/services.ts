import express from "express";
import {
  userRegister,
  userLogin,
  addtask,
  deletetask,
  edittask,
  showlist,
} from "../controller/services";
const router = express.Router();
router.post("/signup", userRegister);
router.post("/login", userLogin);
router.post("/add-task", addtask);
router.post("/update-task", edittask);
router.put("/delete-task", deletetask);
router.get("/show-list", showlist);

export default router;
