import express from "express";
// import { upload } from "../middleware/uploadfile";
import { upload } from "../middleware/s3.bucket";
// import {upload } from '../middleware/s3bucket'
import {
  userRegister,
  userLogin,
  addtask,
  deletetask,
  edittask,
  showlist,
  // S3Bucket
  s3Bucket
} from "../controller/services";
const router = express.Router();
router.post("/signup", userRegister);
router.post("/login", userLogin);
router.post("/add-task", addtask);
router.put("/update-task", edittask);
router.put("/delete-task", deletetask);
router.get("/show-list", showlist);
// router.post("/upload",upload.single('image'),image1);
// router.post("/s3bucket", S3Bucket)
router.post("/upload", upload.single("image"), s3Bucket);
router.post("/upload", s3Bucket);


export default router;
