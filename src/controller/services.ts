import axios from "axios";
import { Request, Response } from "express";
import dotenv from "dotenv";
import fs, { createReadStream } from "fs";
import FormData from "form-data";
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
    const formdata = new FormData();
    formdata.append("image", createReadStream( "path") );
    const details = await axios({
      url: `${base_url_image}/s3/s3image`,
      method: "post",
      headers: { ...formdata.getHeaders() },
      data: req.body.formdata,
    });
    console.log("image", details.data);
    return res.status(200).json({ data: details.data });
  } catch (error) {
    return res.status(404).json({ data: error });
  }
};
