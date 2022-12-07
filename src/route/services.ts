import express from "express";
// import {upload } from '../middleware/s3bucket'
import {
  userRegister,
  userLogin,
  addtask,
  deletetask,
  edittask,
  showlist,
  ImageUpload,
  showImage,
} from "../controller/services";
const router = express.Router();
router.post("/signup", userRegister);
router.post("/login", userLogin);
router.post("/add-task", addtask);
router.put("/update-task", edittask);
router.put("/delete-task", deletetask);
router.get("/show-list", showlist);
router.post("/upload", ImageUpload);
router.get("/show-image", showImage);



export default router;
