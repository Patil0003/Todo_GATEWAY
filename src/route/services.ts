import express from "express";
import { upload } from "../middleware/uploadfile";
import {
  userRegister,
  userLogin,
  addtask,
  deletetask,
  edittask,
  showlist,
  image1,
} from "../controller/services";
const router = express.Router();
router.post("/signup", userRegister);
router.post("/login", userLogin);
router.post("/add-task", addtask);
router.put("/update-task", edittask);
router.put("/delete-task", deletetask);
router.get("/show-list", showlist);
router.post("/upload",upload.single('image'),image1);
export default router;
