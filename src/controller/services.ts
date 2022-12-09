import axios from "axios";
import { Request, Response } from "express";
import dotenv from "dotenv";
import fs, { createReadStream } from 'fs';
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
// image_upload
export const ImageUpload = async (req: Request, res: Response) => {
  try {

    const email: any = req.body?.email
    const reqData: any = req;
    const fileData = reqData.files.file;
    if (req.files && req.files) {
      // console.log("fileDtata", fileData);
    }
    let coverpath = `images/${fileData.name}`;
    if ((<string>fileData.mimetype).startsWith("image")) {
      (async () => {
        await fileData.mv(coverpath);
      })();
    } else {
      console.log("error occured to copy file");
    }

    const formdata = new FormData();
    formdata.append("image", createReadStream(coverpath));
    formdata.append("email", email);

    const response = await axios.post(
      `${base_url_image}/user/imageupload`,
      // `${base_url_image}/s3/s3image`,
      formdata,
      {
        headers: {
          ...formdata.getHeaders(),
        },
      }
    );
    if (coverpath != "") {
      fs.unlinkSync(coverpath);
    }
    return res.status(200).json({ data: response.data });
  } catch (error) {
    return res.status(404).json({ data: error });
  }
};
// get_Image
export const showImage = async (req: Request, res: Response) => {
  try {
    const email: any = req.query?.email
    const details = await axios({

      url: `${base_url_image}/user/get-image?email=${email}`,
      method: "get",
      data: req.body,
    });
    return res.status(200).json({ data: details.data });
  } catch (error: any) {
    throw { status: 404, error: error.data };
  }
};
