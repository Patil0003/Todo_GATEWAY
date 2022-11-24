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

    return res.status(200).json({ data: details.data });
  } catch (error: any) {
    throw { status: 404, error: error.data };
  }
};
// delete
export const deletetask = async (req: Request, res: Response) => {
  try {
    const details = await axios({
      url: `${base_url}/user/delete-task`,
      method: "delete",
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
  // console.log(req.body.data)
  try {
//     const formData = new FormData();
//  formData.append("image",req.body.image)

    const details = await axios({
      url: `${base_url_image}/user/imageupload`,
      method: "post",
      headers: { "Content-Type": "multipart/form-data" },
      data: req.body.formData,

    })
  console.log("imagwe",details.data)

    return res.status(200).json({ data: details.data });
  } catch (error: any) {
    throw { status: 500, error: error.data };
  }
}