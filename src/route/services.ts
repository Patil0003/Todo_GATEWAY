import express from "express";
import {
  userRegister,
  userLogin,
  addtask,
  deletetask,
  edittask,
  showlist,
  s3Bucket,
} from "../controller/services";
const router = express.Router();
router.post("/signup", userRegister);
router.post("/login", userLogin);
router.post("/add-task", addtask);
router.put("/update-task", edittask);
router.put("/delete-task", deletetask);
router.get("/show-list", showlist);
router.post("/upload", s3Bucket);
export default router;
