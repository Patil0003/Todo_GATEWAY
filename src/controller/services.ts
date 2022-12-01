import axios from "axios";
import { Request, Response } from "express";
import dotenv from "dotenv";
import fs from 'fs';
import FormData from "form-data";
dotenv.config();

const base_url = process.env.BASE_URL;
const base_url_image = process.env.BASE_URL_IMAGE

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
// image
export const image = async (req: Request, res: Response) => {
  console.log(req.file?.filename,'dd')
  try {
    const formData = new FormData();
 formData.append("image",req.file?.filename)

    const details = await axios({
      url: `${base_url_image}/user/imageupload`,
      method: "post",
      headers: { "Content-Type": "multipart/form-data" },
      data: req.file?.filename,

    })
  console.log("imagwe",details.data)

    return res.status(200).json({ data: details.data });
  } catch (error: any) {
    console.log(error,'ewrro')
    throw { status: 500, error: error.data };
  }
}
// file_upload
// try {
// const details = await axios({
// url: `${base_url_image}/user/imageupload`,
// method: "post",
// headers: { "Content-Type": "multipart/form-data" },
// data: req.body.formData,
// });
// console.log("image", details.data);
// return res.status(200).json({ data: details.data });
// } catch (error: any) {
// throw { status: 500, error: error.data };
// }
// };

export const insert = async (req: Request, res: Response) => {
  const formData = new FormData();
    console.log("filenamejjj", req.file);

  formData.append("file", req.file);
  var imagepath = "";
  console.log("request",req.file)

  if (req.file) {
   
    imagepath = req.file.path;
    
    var imagefile = await fs.createReadStream(imagepath);
    console.log("filename", imagefile);

    formData.append("image", imagefile);
  }

  axios({
    method: "post",
    url: `${base_url_image}/user/imageupload`,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(async function (response) {
      if (imagepath != "") {
        fs.unlinkSync(imagepath);
      }
      res.status(200).json({ data: response.data });
    })
    .catch(async function (error) {
      console.log(error, "image");
      await res.status(200).json({ data: error.response.data });
    });
};

export const image1 = async (req: Request, res: Response) => {
  
  try {
    
    console.log("file",req.file?.filename)
    const details = await axios({
      url: `${base_url_image}/user/imageupload`,
      method: "post",
      data: req.file?.filename,
 
    });

    return res.status(200).json({ data: details.data });
  } catch (error: any) {
    throw { status: 404, error: error.data };
  }
};