import axios from "axios";
import { Request, Response } from "express";
import dotenv from "dotenv";
import fs from "fs";
dotenv.config();

const base_url = process.env.BASE_URL;
const base_url_image = process.env.BASE_Image_URL;

// register
export const userRegister = async (req: Request, res: Response) => {
  try {
    const details = await axios({
      url: `${base_url}/user/signup`,
      method: "post",
      data: req.body,
    });

    return res.status(200).json({ data: details.data });
  } catch (error: any) {
    throw { status: 404, error: error.data };
  }
};
// login
export const userLogin = async (req: Request, res: Response) => {
  try {
    const details = await axios({
      url: `${base_url}/user/login`,
      method: "post",
      data: req.body,
    });

    return res.status(200).json({ data: details.data });
  } catch (error: any) {
    throw { status: 404, error: error.data };
  }
};
// add
export const addtask = async (req: Request, res: Response) => {
  try {
    const details = await axios({
      url: `${base_url}/user/add-task`,
      method: "post",
      data: req.body,
    });

    return res.json({ status: 200, data: details.data });
  } catch (error: any) {
    throw { status: 404, error: error.data };
  }
};
// delete
export const deletetask = async (req: Request, res: Response) => {
  try {
    const details = await axios({
      url: `${base_url}/user/delete-task`,
      method: "put",
      data: req.body,
    });

    return res.status(200).json({ data: details.data });
  } catch (error: any) {
    throw { status: 404, error: error.data };
  }
};
// update
export const edittask = async (req: Request, res: Response) => {
  try {
    const details = await axios({
      url: `${base_url}/user/update-task`,
      method: "put",
      data: req.body,
    });

    return res.status(200).json({ data: details.data });
  } catch (error: any) {
    throw { status: 404, error: error.data };
  }
};
// list
export const showlist = async (req: Request, res: Response) => {
  try {
    const details = await axios({
      url: `${base_url}/user/show-list`,
      method: "get",
      data: req.body,
    });

    return res.status(200).json({ data: details.data });
  } catch (error: any) {
    throw { status: 404, error: error.data };
  }
};
// file_upload
export const s3Bucket = async (req: Request, res: Response) => {
  try {
 
    const details = await axios({
      url: `${base_url_image}/s3/s3image`,
      method: "post",
      headers: { "Content-Type": "multipart/form-data" },
      data: req.body.formData,
    });
    console.log("image", details.data);
    return res.status(200).json({ data: details.data });
  } catch (error: any) {
throw { status: 500, error: error.data };
}
};
// export const insert = async (req: Request, res: Response) => {
//   const formData = new FormData();
//     console.log("filename", req.body.data);

//   formData.append("data", req.body.data);
//   var imagepath = "";

//   if (req.file) {
//     imagepath = req.file.path;
    
//     var imagefile = await fs.createReadStream(imagepath);
//     console.log("filename", imagefile);

//     formData.append("image", imagefile);
//   }

//   axios({
//     method: "post",
//     url: `${base_url_image}/user/imageupload`,
//     data: formData,
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(async function (response) {
//       if (imagepath != "") {
//         fs.unlinkSync(imagepath);
//       }
//       res.status(200).json({ data: response.data });
//     })
//     .catch(async function (error) {
//       console.log(error, "image");
//       await res.status(200).json({ data: error.response.data });
//     });
// };
