import express from "express";
import {
  userRegister,
  userLogin,
  addtask,
  deletetask,
  edittask,
  showlist,
  image
} from "../controller/services";
const router = express.Router();
router.post("/signup", userRegister);
router.post("/login", userLogin);
router.post("/add-task", addtask);
router.put("/update-task", edittask);
router.delete("/delete-task", deletetask);
router.get("/show-list", showlist);
router.post("/fileupload",image);
export default router;
