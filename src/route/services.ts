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
router.post("/post-register-api", userRegister);
router.post("/post-login-api", userLogin);
router.post("/post-add-task-api", addtask);
router.post("/post-update-task-api", edittask);
router.put("/put-delete-api", deletetask);
router.get("/get-alllist-api", showlist);
export default router;
