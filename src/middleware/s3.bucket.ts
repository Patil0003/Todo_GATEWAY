const { S3Client } = require("@aws-sdk/client-s3");
import multer, { FileFilterCallback } from "multer";
import multerS3 from "multer-s3";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.AWS_BUCKET_REGION,process.env.AWS_ACCESS_KEY,process.env.AWS_SECRET_KEY,"09809809809")
const s3config = new S3Client({
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});
const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);upload
  } else {
    cb(new Error());
  }
};

export const upload = multer({

  fileFilter,
  storage: multerS3({
    
    acl: "public-read",
    s3: s3config,
    bucket: <string>process.env.AWS_BUCKET_NAME,
    metadata: (_req, _file, cb) => {
      cb(null, { fieldName: "image" });
    },
    key: (_req, file, cb) => {
      // console.log(file, "test");
      cb(null, `${Date.now().toString()}.${file.originalname.split(".")[1]}`);
    },
  }),
});